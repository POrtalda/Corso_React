// Crea un componente React che:
// Mostra l’orario attuale aggiornato ogni secondo.
// Usa useEffect per avviare un timer (setInterval) 
// quando il componente viene montato.
// Pulisce il timer quando il componente viene smontato.

import { useEffect, useState } from "react"

export default function MostraDataEOra() {
    const [data, setData] = useState(new Date().toLocaleString())

    useEffect(() => {
        const timer = setInterval(() => {
            setData(new Date().toLocaleString())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
  return (
    <>
    <h2>Data e ora attuali: {data}</h2>
    </>
  )
}
