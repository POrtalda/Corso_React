// Crea un componente che tiene traccia dei secondi passati 
// da quando è stato caricato. 
// Il numero dei secondi deve aggiornarsi ogni secondo.

import { useEffect, useState } from "react"

export default function Timer() {
    const [secondi, setSecondi] = useState(0)
    const [attivo, setAttivo] = useState(false)

    function handleReset() {
        setSecondi(0)
        setAttivo(false)
    }

    // useEffect(() => {
    //     const intervallo = setInterval(() => {
    //         setSecondi(prev => prev + 1)
    //     }, 1000);
    //     return (() => clearInterval(intervallo))
    // }, [])

    useEffect(() => {
        if (attivo) {
            const intervallo = setInterval(() => {
                setSecondi(prev => prev + 1)
            }, 1000)

            return () => clearInterval(intervallo)
        }

    }, [attivo])

    return (
        <>
            <h3>secondi passati : {secondi}</h3>
            {!attivo && <p style={{ color: "gray" }}>Timer in pausa</p>}
            <hr />
            <button onClick={() => setAttivo(!attivo)}>{!attivo ? 'START' : 'PAUSE'}</button>
            <button onClick={handleReset}>RESET</button>
        </>
    )
}
