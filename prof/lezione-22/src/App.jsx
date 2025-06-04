import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { GandaLorem } from 'gandalorem';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        <GandaLorem words={5} />
      </h1>

      <p>
        <GandaLorem words={350} />
      </p>
    </>
  )
}

export default App
