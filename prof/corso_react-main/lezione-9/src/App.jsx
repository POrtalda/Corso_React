import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test';
import Card from './components/Card/Card';
import Test2 from './components/Test2/Test2';

function App() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    nascita: '',
    genere: '',
    professione: '',
    citta: '',
    cap: '',
    residenza: ''
  })

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  // const utenti = [
  //   { id: 1, name: 'Aldo' },
  //   { id: 2, name: 'Luca' },
  //   { id: 3, name: 'Mario' },
  //   { id: 4, name: 'Paolo' },
  //   { id: 5, name: 'Alessandro' },
  //   { id: 6, name: 'Mike' },
  //   { id: 7, name: 'Sara' },
  //   { id: 8, name: 'Sabrina' },
  //   { id: 9, name: 'Daniel' },
  //   { id: 10, name: 'Marco' },
  //   { id: 11, name: 'Max' },
  //   { id: 12, name: 'Lorenzo' },
  // ];

  // const [search, setSearch] = useState('');

  // const filteredUtenti = utenti.filter(u =>
  //   u.name.toLowerCase().startsWith(search));

  return (
    <>
      {/* <Test /> */}

      {/* <p>cerca utente:</p>
      
      <input type="text"
        value={search} onChange={(e) => setSearch(e.target.value)} />

      {filteredUtenti.length > 0 ? (
        <ul>
          {filteredUtenti.map(u => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      ) : (
        <h2 style={{color: 'red'}}>utente non trovato :(</h2>
      )} */}


      {/* <label>username:</label><br />
      <input type="text"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})} />

      <br />
      <label>password: </label> <br />
      <input type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})} /> */}

{/* 
      <hr />
      <Card title="prima card" description="questa è la prima e unica super mega ultra card con una descrizione un po' lunga perché mi serve così e basta e stop." /> */}
<Test2 />
    </>
  )
}

export default App
