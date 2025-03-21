import { useState } from 'react'
import Books from './components/Books/Books'
import Test from './components/Test'
import './App.css'

export default function App() {
  const [books, setBooks] = useState([
    {id: 1, titolo: 'il signore degli anelli'},
    {id: 2, titolo: 'il miglio verde'},
    {id: 3, titolo: 'origin'}
  ])

  const filteredBooks = books.filter(b => b.titolo.startsWith('i'))

  const [inputTitolo, setInputTitolo] = useState('')

  function handleClick(){
  //   setBooks(                             // sovrascrivi lo stato bppks
  //     [                                   // con un nuovo array
  //       ...books,                         // che contiene tutti gli elementi precedenti
  //       {id: 5, titolo: inputTitolo}]);   // e in coda aggiungiun nuovo oggetto
  // }

  // come aggiungere un in fondo all'array
  //setBooks([...books, {id: crypto.randomUUID(), titolo:inputTitolo} ])
  
  //come aggiungere un in cima all'array
  setBooks([{id: crypto.randomUUID(), titolo:inputTitolo}, ...books ])
}
  
  return (
    <>

    <label>titolo:</label>
    <input type='text' value={inputTitolo} onChange={(e)=> setInputTitolo(e.target.value)}/>
    <button onClick={handleClick}>aggiungi</button>

    <hr />

    <h1>tutti i libri:</h1>
    <hr />
      <Books books = {books} onClickRemove= {(id)=> setBooks(books.filter(book => book.id !== id))}/>
      <hr />

      <h1>libri che iniziano con la 'i'</h1>
      <hr />
      <Books books = {filteredBooks} />

      <Test/>
    </>
  )
}
