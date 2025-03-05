import { useState  } from 'react'
import './App.css'
import Counter from './components/Counter'
import Coffe from './components/Coffe'
import Input from './components/Input'
import Test from './components/Test'

export default function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
    <Test/>
    <hr />
<Input/>
    
    <hr/>
      <h1>{count}</h1>
      <Counter onAddButton={()=>setCount(count +1)}
        count={count}/>

        <Coffe/>
        <button onClick={()=> setIsVisible(!isVisible) }>mostra/nascondi
    </button>
    </>
  )
}


