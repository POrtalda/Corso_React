import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        console.log('il componente UserList è stato renderizzato')
    })

    // questo effetto viene eseguito quando il componente viene montato
    useEffect(()=> {
        console.log('il componente UserList è stato montato');
        
        // chiamata ad una web api e aggiornamento dello state
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                console.log(data);
            })

        // funzione di cleanup: eseguita quando il componente viene smontato 
        return () => {
            console.log('il componente UserList è stato smontato');
        }

    }, [])


  return (
    <>
        <h2>lista utenti</h2>
        {users.map(user => (
            <p key={user.id}>{user.name}</p>
        ))}
    </>
  )
}
