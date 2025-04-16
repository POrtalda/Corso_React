import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/user/User'

// const userFromDB = [
//   { id: 1, name: 'Pippo' },
//   { id: 2, name: 'Jhonn' },
//   { id: 3, name: 'Al' },
//   { id: 4, name: 'Jack' }
// ]

export default function App() {
  const [users, setUsers] = useState(null)
 const [filteredUsers, setFilteredUsers] = useState(null)
  const [search, setSearch] = useState('')


  useEffect(() => {

  //   setTimeout(() => {
  //     setUsers(userFromDB)
  //   }, 2000)
  // 
  fetch ('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
  setUsers(data);
  setFilteredUsers(data);
})}, [])


  // eseguire questo filtro tutte le volte che lo stato search
  // viene modificato
  useEffect(() => {
    if (users === null) return;
     
    setFilteredUsers(users.filter(user => user.name.toLowerCase().startsWith(search)))

  }, [search])
  return (
    <>

      <input type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='search user by name' />
      {
        filteredUsers ?
          filteredUsers.map(user => (
            <User key={user.id} user={user} />
          ))
          :
          (
            <p>
              loading...
            </p>
          )}
    </>
  )
}


