// Crea un componente che:
// permette di scrivere un testo in un input,
// quando premi "Aggiungi", quel testo viene salvato in una lista,
// mostra l’elenco di tutti gli elementi aggiunti.

import { useState } from "react"

export default function ToDoList() {
    // Crea uno stato input per salvare quello che scrive l’utente.
    const [input, setInput] = useState('')
    // Crea uno stato lista (array) per salvare tutti gli elementi aggiunti.
    const [lista, setLista] = useState([])

    function handleAggiungi() {
        // evita di aggiungere elemnti vuoti
        if (input.trim() === '') return
        // aggiunge il nuovo elemnto alla lista
        setLista([...lista,input])
        // resetta input
        setInput('')
    }

  return (
    <>
    <label>
        <input type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="quale attività devi fare?"/>
        
    </label>
    <button onClick={handleAggiungi}>aggiungi</button>

    <ul>
        {lista.map((item, ID) => (
            <li key={ID}>{item}</li>
        ))}
    </ul>
    </>
  )
}
