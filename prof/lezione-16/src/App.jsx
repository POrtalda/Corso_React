import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User/User';

// const usersFromDB = [
//   { id: 1, name: 'Pippo' },
//   { id: 2, name: 'Al' },
//   { id: 3, name: 'John' },
//   { id: 4, name: 'Jack' },
//   { id: 5, name: 'Charlie' },
// ];

// https://jsonplaceholder.typicode.com/users

function App() {
  // users ci serve per memorizzare tutti i dati che ci restituisce l'api
  const [users, setUsers] = useState(null);
  // filteredUsers ci serve per memorizzare nell'array solo gli utenti che di volta in volta corrispondono a cosa digita l'utente
  const [filteredUsers, setFilteredUsers] = useState(null);
  // stato che ci serve a tenere sempre sotto controllo cosa sta digitando l'utente
  const [search, setSearch] = useState('');

  // eseguire questa "finta fetch" solo quando il componente
  // viene montato da React
  useEffect(() => {

    // setTimeout(() => {
    //   setUsers(usersFromDB)
    // }, 2000);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })

  }, []);

  // eseguire questo filtro tutte le volte che lo stato search
  // viene modificato
  useEffect(()=> {
    // ci permette di vedere il loading di 2 secondi
    if (users === null) return;

    // console.log('utente digita carattere');
    setFilteredUsers(users.filter(user => user.name.toLowerCase().startsWith(search)));
  }, [search]);

  return (
    <>
      <input type="text"
        placeholder="search user by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {
        filteredUsers ?
          filteredUsers.map(user => (
            <User key={user.id} user={user} />
          ))
          :
          (
            <p>loading...</p>
          )
      }
    </>
  )
}

export default App
