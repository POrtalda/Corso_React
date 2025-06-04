import { useState } from 'react';
import './App.css'
import CounterFunzionante from './components/CounterFunzionante'
import CounterNonFunzionante from './components/CounterNonFunzionante'
import Card from './components/Card';
import ButtonStar from './components/ButtonStar';

function App() {
  // const [count, setCount] = useState(100);
  // const [title, setTitle] = useState('titolo della pagina');
  // const [isAlive, setIsAlive] = useState(false);
  // const isAlive = false;

  // const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  return (
    <>
      {/* <h1>{title}</h1>
      <button onClick={() => setTitle('i contatori')}>
        cambia titolo
      </button>

      <h3>counter di app: {count}</h3>
      <button onClick={() => setCount(count + 10)}>+10</button> */}
      {/* <CounterNonFunzionante /> */}
      {/* <CounterFunzionante appCounter={} />
      <CounterFunzionante /> */}

      {/* <section className={isDarkModeActive ? 'dark' : 'light'}>

        <button
          onClick={() => setIsDarkModeActive(!isDarkModeActive)}>
          {isDarkModeActive ? '☀️' : '🌚'}
        </button>

        {isAlive ? (
          <p>utente vivo 🍷</p>
        ) : (
          <p>utente morto ☠️</p>
        )}

        <button onClick={() => setIsAlive(!isAlive)}>
          {isAlive ? 'uccidi' : 'resuscita'}
        </button>

      </section> */}


        {/* <p style={{color: 'red'}}>contatore: {count}</p>

        <Card appCount={count} onAddClick={setCount} /> */}

        <ButtonStar />


    </>
  )
}

export default App
