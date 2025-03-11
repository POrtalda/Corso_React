import { useState } from "react"

export default function CounterFunzionante({appCounter}) {
    // let count = 0;
    const [count, setCount] = useState(0);

    function handleClick() {
        // count += 1;
        setCount(count + 1);
    }

    return (
    <>
    <div className="counter counter-work">
        <p>counter di app.jsx: {appCounter}</p>
        <h1>{count}</h1>
        <button onClick={handleClick}>aggiungi</button>
    </div>
    </>
  )
}
