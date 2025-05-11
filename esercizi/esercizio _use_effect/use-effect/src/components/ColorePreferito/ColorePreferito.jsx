// Obiettivo:
// Crea un'interfaccia in cui l’utente può:
// Scegliere un colore preferito da una lista a tendina (<select>).
// Visualizzare un messaggio che dice:
// "Hai scelto il colore: [colore]", con il nome del colore selezionato.

import { useState } from "react"



export default function ColorePreferito() {
    const[coloreSelezionato, setColoreselezionato] = useState('')
    function handleReset() {
        setColoreselezionato('')
    }
  return (
    <>
        <select onChange={(e) => {setColoreselezionato(e.target.value)}}
            value={coloreSelezionato}>
            <option value="" disabled>--scegli un colore--</option>
            <option value="rosso" >Rosso</option>
            <option value="blu" >Blu</option>
            <option value="verde" >Verde</option>
        </select>
        {coloreSelezionato && 
        <p>hai selezionato il colore {coloreSelezionato}</p>}
        <button onClick={handleReset}>reset</button>
    </>
  )
}
