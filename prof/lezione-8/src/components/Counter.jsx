import { useState } from "react"

export default function Counter({onAddButton, count, description, onChangeName}) {
    

  return (
    <>
        <button onClick={onAddButton}>
            {description}: {count}
        </button>
        <button onClick={onChangeName}>cambia nome pulsante</button>
    </>
  )
}
