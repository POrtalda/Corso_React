import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  // TODO inizializzare darkMode con quello che c'è nel local storage
  const [darkMode, setDarkMode] = useState(false)

  function handleToggleDarkLightMode() {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <section className={darkMode ? 'dark-mode': 'light-mode'}>
        <button onClick={handleToggleDarkLightMode}>
          {darkMode ? '🌞' : '🌜'}
        </button>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Counter />
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </section>

    </>
  )
}

export default App
