import { useState } from 'react'
import './App.css'
import Books from './components/Books/Books';
import Test from './components/Test/Test';

function App() {
  const [books, setBooks] = useState([
    { id: 1, titolo: 'il signore degli anelli' },
    { id: 2, titolo: 'il miglio verde' },
    { id: 3, titolo: 'origin' },
    { id: 4, titolo: 'fantozzi' },
  ]);

  const [inputTitolo, setInputTitolo] = useState('');

  const filteredBooks = books.filter(b => b.titolo.startsWith('i'));

  function handleClick() {
    // setBooks( // sovrascrivi lo stato books
    //   [ // con un nuovo array
    //     ...books, // che contiene tutti gli elementi precedenti
    //     {id: 5, titolo: inputTitolo} // e in coda aggiungigli un nuovo oggetto
    //   ]
    // );

    //come aggiungere un elemento in fondo all'array
    // setBooks([...books, { id: crypto.randomUUID(), titolo: inputTitolo}]);

    // come aggiunger un elemento in cima all'array
    setBooks([{ id: crypto.randomUUID(), titolo: inputTitolo }, ...books]);
  }

  return (
    <>
      <label>titolo: </label>
      <input type="text" value={inputTitolo}
        onChange={(e) => setInputTitolo(e.target.value)} />
      <button onClick={handleClick}>aggiungi</button>

      <hr />

      <h1>tutti i libri:</h1>

      {/* <ul>
        {books.map(b => (
          <li key={b.id}>
            <span>
            {b.titolo}
            </span>
            <button onClick={()=> setBooks(books.filter(book => book.id !== b.id))}>elimina</button>
          </li>
        ))}
      </ul> */}

      <Books books={books} onClickRemove={(id)=> setBooks(books.filter(book => book.id !== id))} />

      {/* <hr />
      <h1>libri che iniziano con la 'i'</h1>
      <Books books={filteredBooks} /> */}

      <Test />
    </>
  )
}

export default App
