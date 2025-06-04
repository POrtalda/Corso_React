import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <>
    <div>
        <h2>{count}</h2>
        <button className={darkMode ? 'btn-dark' : 'btn-light'} onClick={()=> setCount(count => count - 1)}>-</button>
        <button className={darkMode ? 'btn-dark' : 'btn-light'} onClick={()=> setCount(count => count + 1)}>+</button>
    </div>
    </>
  )
}
