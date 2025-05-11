// Obiettivo: Crea un'app in cui l’utente può:
// Scrivere un prodotto in un campo di input.
// Aggiungerlo alla lista della spesa.
// Vedere l’elenco dei prodotti aggiunti.
// Eliminare un prodotto cliccando su un pulsante accanto ad esso.

import { useState } from "react"



export default function ToDoListeliminazione() {
const [prodotto, setProdotto] = useState('')
const[listaSpesa, setListaSpesa] = useState([])

function handleAggiungi() {
        // evita di aggiungere elemnti vuoti
        if (prodotto.trim() === '') return
        // aggiunge il nuovo elemnto alla lista
        setListaSpesa([...listaSpesa,prodotto])
        // resetta input
        setProdotto('')
    }
    function handleRimuovi(index) {
        setListaSpesa(listaSpesa.filter((_, i) => i !== index))
    }

  return (
    <>
    <label>
        <input type="text" 
        value={prodotto}
        onChange={(e) => setProdotto(e.target.value)}
        placeholder="cosa vuoi comprare?"/>        
    </label>

    <button onClick={handleAggiungi}>aggiungi</button>
    {listaSpesa.map((item,index) => (
        <li key={index}>{item} <button onClick={() => handleRimuovi(index)} >❌</button></li>
    ))}
    </>
  )
}
