import { useEffect, useState } from "react"

export default function Test() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count => count + 1);
    }

    useEffect(()=> {
        console.log("Render!");
    })
    
    useEffect(()=> {
        console.log("Montato!");
    }, [])
    
    useEffect(()=> {
        console.log(`hai cliccato ${count} volte`);

        return () => {
            console.log("Cleanup prima del prossimo count");
        }

    }, [count])

  return (
    <>
        <h1>Ciao {name}!</h1>
        <h2>Hai cliccato {count} volte</h2>
        <input type="text" value={name}
            onChange={(e)=> setName(e.target.value)} />
        <button onClick={handleClick}>Aumenta</button>
    </>
  )
}
