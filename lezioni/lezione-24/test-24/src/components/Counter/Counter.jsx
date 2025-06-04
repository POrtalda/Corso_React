import { useContext, useState } from "react"
import { ThemeContext } from "../../Context/ThemeContext"


export default function Counter() {
    const [count, setCount] = useState(0)
    const {darkMode} = useContext(ThemeContext)
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
