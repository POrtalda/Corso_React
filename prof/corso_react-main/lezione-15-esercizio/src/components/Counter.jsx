import { useEffect, useState } from "react"

export default function Counter({count, setCount}) {
    

    useEffect(() => {
        console.log('montato');

        return () => {
            console.log("smontato");
        }

    }, [])

  return (
    <>
        <button onClick={setCount}>
            Aggiungi: {count}
        </button>
    </>
  )
}
