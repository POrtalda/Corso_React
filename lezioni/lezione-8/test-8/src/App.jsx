import './App.css'
import { useState } from 'react'
import Counter from './components/Counter'

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>{count}</h1>
      <Counter onAddButton={()=> setCount(count + 1)}
        count= {count}/>
    </>
  )
}

