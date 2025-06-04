import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    // effetto scatta ogni volta che il componente viene renderizzato
    useEffect(()=> {
        // setCount(count + 1);
        console.log('il componente Counter è stato renderizzato');
    });

    // effetto viene eseguito tutte le volte che la dipendenza count viene aggiornata
    useEffect(()=> {
        console.log(`hai cliccato il counter ${count} volte`);
    }, [count])

    return (
        <>
            <button onClick={()=> setCount(count + 1)}>Cliccami {count}</button>
            <p>io sono Counter.jsx</p>
        </>
    )
}
