import { useEffect } from "react"


export default function Test() {
    useEffect(()=> {console.log('componente montato')}, [])
  return (
    <>
        <p>sono test</p>
    </>
  )
}
