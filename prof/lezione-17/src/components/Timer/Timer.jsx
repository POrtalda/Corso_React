import { useEffect, useState } from "react"

export default function Timer() {
    // stato seconds che gestisce il contatore dei secondi:
    // parte da zero:
    const [seconds, setSeconds] = useState(0);
    // stato che ci dice se il contatore è attivo o se è stoppato.
    // all'inizio è disattivato (false)
    const [isActive, setIsActive] = useState(false);

    // effetto collaterale che scatta... [isActive]: tutte le volte che cambia il valore di isActive 
    useEffect(() => {
        // se is active è true (l'utente ha fatto partire il contatore), allora faccio ripartire l'intervallo
        // che ogni secondo aggiunge +1 allo stato seconds
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000)
        }

        // funzione di cleanup: viene eseguita prima che riparta l'effetto collaterale
        return () => {
            clearInterval(interval);
        }
    }, [isActive]);
    
    function handleStart() {
        setIsActive(true);
    }
    function handlePause() {
        setIsActive(false);
    }
    function handleStop() {
        setIsActive(false);
        setSeconds(0);
    }

    return (
        <>
            <hr />
            <button style={{ backgroundColor: 'green' }} onClick={handleStart}>start</button>
            <button style={{ backgroundColor: 'orange' }} onClick={handlePause}>pausa</button>
            <button style={{ backgroundColor: 'red' }} onClick={handleStop}>stop</button>
            <p>contatore: <b>{seconds}</b></p>
            <hr />
        </>
    )
}
