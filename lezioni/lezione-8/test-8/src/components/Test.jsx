import React, { useState } from 'react'

export default function Test() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count +1)
        setCount(count +1)
        setCount(count +1)
    }

    function handleClick2(){
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
  return (
    <>
        <button onClick={handleClick2}>
            count: {count}
        </button>
    </>
  )
}
