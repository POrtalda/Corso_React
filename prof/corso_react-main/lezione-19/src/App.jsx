import { useState } from 'react'
import './App.css'
import Notification from './components/Notification/Notification';

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      <Notification />
    </>
  )
}

export default App
