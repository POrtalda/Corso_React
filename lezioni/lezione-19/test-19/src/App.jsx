import { useState } from 'react'

import './App.css'
import Counter from './components/Counter/Counter'
import Counter2 from './components/Counter2/Counter2'
import Notifications_UseState from './components/Notification_UseState/Notifications_UseState'
import Notifications_UseReduce from './components/Notifications_UseReducer/Notifications_UseReduce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <Counter2/> */}
      <Notifications_UseState/>
      <hr />
      <Notifications_UseReduce/>
    </>
  )
}

export default App
