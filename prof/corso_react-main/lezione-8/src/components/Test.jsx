import { useState } from "react"

export default function Test() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1); // 0 + 1 = 1
        setCount(count + 1); // 0 + 1 = 1
        setCount(count + 1); // 0 + 1 = 1
    }

    function handleClick2() {
        setCount(c => c + 1); // 0 + 1 = 1
        setCount(c => c + 1); // 1 + 1 = 2
        setCount(c => c + 1); // 2 + 1 = 3
    }

    return (
        <>
            <button onClick={handleClick2}>count: {count}</button>
        </>
    )
}
