import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
    <button onClick={()=> setIsVisible(!isVisible)}>
      mostra/nascondi
    </button>
    {isVisible && (<Counter count={count} setCount={handleClick} />)}
    </>
  )
}

export default App
