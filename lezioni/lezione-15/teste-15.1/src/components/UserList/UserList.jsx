import { useEffect } from "react"


export default function UserList() {
  // questo effetto viene eseguito quando 
  // il componente viene montato
  useEffect(() => {
    console.log('il componente UserList è stato montato')  }, [
      fetch('https://jsonplaceholder.ir/users', {
        method: 'GET',
      })
        .then(response => response.json())
        .then(json => console.log(json))
    ])
  return (
    <>
    <h2>lista utenti</h2>
    </>
  )
}
