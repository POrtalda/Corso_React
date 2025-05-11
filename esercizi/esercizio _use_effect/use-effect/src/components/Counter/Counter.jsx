// 1. Contatore
//Crea un componente che visualizza un numero e ha due bottoni: 
// "Incrementa" e "Decrementa".

import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)
  return (
    <>
    <h1>numero: {counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  )
}
