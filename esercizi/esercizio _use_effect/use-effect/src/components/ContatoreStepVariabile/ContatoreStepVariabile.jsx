// Crea un componente React che:
// Visualizza un numero (partendo da 0).
// Permette di aumentare o diminuire il numero tramite due pulsanti + e -.
// Ha un campo di input per scegliere di quanto aumentare o diminuire 
// lo step (valore predefinito: 1).

import { useState } from "react"

export default function ContatoreStepVariabile() {

    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    function incrementa() {
      setCount(count + step)
    }

    function decrementa() {
setCount(count - step)
    }
    function reset() {
      setCount(0)
      setStep(1)
    }
  return (
    <>
    <label>scrivi il valore dello step: 
    <input 
    type="number" 
    value={step}
    onChange={(e) => setStep(Number(e.target.value))}/>
    </label>
    <h3>{count}</h3>
    <button onClick={decrementa}>-</button>
    <button onClick={incrementa}>+</button>
    <button onClick={reset}>Reset</button>
    </>
  )

} 