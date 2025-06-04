import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [msg, setMsg] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('test', 'viva React');
    setMsg(sessionStorage.getItem('test'));
  }, []);

  // useEffect(() => {
  //   sessionStorage.setItem('test', 'altro test');
  // }, [msg]);

  function handleClickAdd() {
    
  }
  function handleClickShow() {
    alert(sessionStorage.getItem('test'));
  }
  function handleClickRemove() {
    sessionStorage.removeItem('test');
    setMsg('');
  }

  function handleChange(e) {
    sessionStorage.setItem('test', e.target.value);
    setMsg(e.target.value);
  }

  function handleTheme() {
    sessionStorage.setItem('darkMode', !darkMode);
    setDarkMode(!darkMode);
  }

  return (
    <>
    <button onClick={handleTheme}>cambia tema</button>
     <button onClick={handleClickAdd}>crea</button>
     <button onClick={handleClickShow}>mostra</button>
     <button onClick={handleClickRemove}>elimina</button>

     <br />
     <input type="text" value={msg} onChange={handleChange} />

     <h1>{msg}</h1>
    </>
  )
}

export default App
