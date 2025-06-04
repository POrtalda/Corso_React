import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    function handleDecrese() {
        const newCount = count - 1;
        setCount(newCount);
        setMin(Math.min(newCount, min));
    }

    function handleIncrease() {
        const newCount = count + 1;
        setCount(newCount);
        setMax(Math.max(newCount, max));
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <>
            <p>questo è il componente counter</p>
            <h1>{count}</h1>

            <button onClick={handleDecrese}>-</button>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleReset}>🗑️reset</button>

            <hr />
            <p>max: {max}</p>
            <p>min: {min}</p>

        </>
    )
}
