import { useEffect, useState } from "react"


export default function test() {
const[name, setName] = useState('')
const[count, setCount] = useState(0)
function handleClick(){
    setCount(count => count +1)
}

useEffect(()=> {
    console.log('render')
})

useEffect(() => {
    console.log('Montato')
}, [])


useEffect(() => {
    console.log('hai cliccato n volte')
    return() => {
        console.log('cleanup')
    }
}, [count])
  return (
    <>
    <h1>ciao {names}</h1>
    <h2>hai cliccato .... volte</h2>
    <input type="text" value={name} 
    onChange={(e)=> setName(e.target.value)} />
    <button onClick={handleClick}>
        aumenta
    </button>
    </>
  )
}
