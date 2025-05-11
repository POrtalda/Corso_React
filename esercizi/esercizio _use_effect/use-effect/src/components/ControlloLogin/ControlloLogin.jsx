// Crea un’interfaccia dove l’utente può inserire un nome utente 
// e cliccare su “Accedi”. 
// Dopo aver effettuato il login, viene mostrato un messaggio di benvenuto 
// e un pulsante “Esci”.

import { useState } from "react"

export default function ControlloLogin() {
    const [username, setUsername] = useState('')
    const [loggato, setLoggato] = useState(false)
    return (
        <>
            {loggato ? (
                <div>
                <p>    benvenuto {username}</p>
                <button onClick={() => {setLoggato(false)}}>esci</button>
                </div>
            ) : (
                <div>
                    <label>
                        Nome utente:
                        <input
                            type="text"
                            placeholder="scrivi nome utente" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </label >
                    <button onClick={() => {setLoggato(true)}}>login</button>
                </div>
            )}

        </>
    )
}
