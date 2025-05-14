import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post/Post'
import PostREducer from './components/Post-Redecer/PostREducer'
import Message from './components/Message/Message'
import Section from './components/Section/Section'
import { UserContext } from './context/UserContext'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  const firstName = 'Pippo'

  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      {/* <p>senza SetReducer</p>
      <Post />
      <p>con SetReducer</p>
      <PostREducer /> */}


      <UserContext.Provider value={firstName}>
        <ThemeContext.Provider value={darkMode}>

          <Section />
          
        </ThemeContext.Provider>
      </UserContext.Provider>

    </>
  )
}

export default App
