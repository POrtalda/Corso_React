import { useState } from 'react'

import './App.css'
import Counter from './components/Counter/Counter'
import Counter2 from './components/Counter2/Counter2'
import Notification from './components/Notification/Notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <Counter2/> */}
      <Notification/>
    </>
  )
}

export default App
