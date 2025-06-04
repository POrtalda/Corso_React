import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import { ThemeContext } from './Context/ThemeContext'
import MainSection from './components/MainSection/MainSection'

function App() {

  const [darkMode, setDarkMode] = useState((prev) => {
    const darkMode = localStorage.getItem('darkMode')
    return darkMode === 'true' ? true : false
  })

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, []);

  // effetto collaterale che scatta quando l'utente desudera 
  // cambiare la darkMode e va a memorizzare nel local storage il nuovo valore
  useEffect(()=> {
    localStorage.setItem('darkMode' , darkMode)
  }, [darkMode])

  function handleToggleDarkLightMode() {
    setDarkMode(!darkMode)
  }



  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>

        <section className={darkMode ? 'dark-mode' : 'light-mode'}>
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
            <MainSection>

            </MainSection>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </section>
      </ThemeContext.Provider>


    </>
  )
}

export default App
