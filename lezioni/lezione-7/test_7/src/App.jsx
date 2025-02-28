
import './App.css'
import CounterNonFunzionante from './components/CounterNonFunzionante'
import CounterFunzionante from './components/CounterFunzionante'
import { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(100)

  const [titolo, setTitolo] = useState('titolo della pagina')

  const [isAlive, setIsAlive] = useState(false)

  return (
    <>
      {/* <h1>{titolo}</h1>
      <button onClick={() => setTitolo('contatori')}>cambia titolo</button>

      <h3>counter di app: {count}</h3>
      <button onClick={() => setCount(count + 10)}>+10</button>
      <CounterNonFunzionante />
      <CounterFunzionante appCounter={count} />
      <CounterFunzionante /> */}


      {/* {isAlive ? (
        <p>utente vivo</p>
      ) : (
        <p>utente morto</p>
      )}

      <button onClick={()=>setIsAlive(!isAlive)}>{isAlive ? 'uccidi' : 'resuscita'}</button> */}
    </>
  )
}

