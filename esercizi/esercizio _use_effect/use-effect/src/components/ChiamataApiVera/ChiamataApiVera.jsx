// Crea un componente che:
// Fa una richiesta fetch all'API pubblica https://jsonplaceholder.typicode.com/posts/1
// Mostra un messaggio "Caricamento..." mentre attende la risposta.
// Quando riceve i dati, mostra il titolo del post (title) e il corpo (body).
// Se si verifica un errore, mostra un messaggio di errore.

import { useEffect, useState } from "react"



export default function ChiamataApiVera() {
    const [dati, setDati] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data =>{
            setDati(data)
            setLoading(false)
        })
        .catch(error => {
            setError('Errore nella chiamata API')
            setLoading(false)
        })
    }, [])
  return (
    <>
        {loading && <h3>Caricamento in corso...</h3>}
        {error && <p>{error}</p>}
        {dati && (
            <div>
                <h3>{dati.title}</h3>
                <p>{dati.body}</p>
            </div>
        )}
     </>
  )
}
