import { useEffect, useState } from "react"

export default function Counter() {
  const[count, setcount] = useState(0)
    
  return (
    <>
    <button onClick={()=>setCount(count +1)}>
      aggiungi: {count}
    </button>
    </>
  )
}
