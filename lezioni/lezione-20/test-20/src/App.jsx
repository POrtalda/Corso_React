import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post/Post'
import PostREducer from './components/Post-Redecer/PostREducer'
import Message from './components/Message/Message'
import Section from './components/Section/Section'

function App() {
  const [count, setCount] = useState(0)

  const firstName = 'Pippo'
  return (
    <>
      {/* <p>senza SetReducer</p>
      <Post />
      <p>con SetReducer</p>
      <PostREducer /> */}
      <Section />
    </>
  )
}

export default App
