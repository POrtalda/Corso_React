// Obiettivo:
// Creare un componente che simula il caricamento di dati da un server.

import { useEffect, useState } from "react"

export default function ChiamataAPI() {
    const [dati, setDati] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
           setDati("Risposta dell'API")
           setLoading(false)
        }, 2000)
    }, [])
  return (
    <>
        {
            loading ? <p>Caricamento...</p> : <p>{dati}</p>
        }
    </>
  )
}
