import { use, useState } from 'react'
import './App.css'
import Post from './components/Post/Post'
import Message from './components/Message/Message'
import Section from './components/Section/Section';
import { UserContext } from './context/UserContext';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const user = {
    firstName: 'Pippo',
    age: 99
  };

  const [darkMode, setDarkMode] = useState(false);

  // function handleClick() {
  //   setDarkMode(!darkMode);
  // }

  return (
    <>
      <Post />

      <button onClick={()=> setDarkMode(!darkMode)}>
        {darkMode ? 'light' : 'dark'}
      </button>

      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={darkMode}>
          <h1 className={darkMode ? 'dark' : 'light'}>Titolo</h1>
          <Section />
          <Message />
        </ThemeContext.Provider>
      </UserContext.Provider>

    </>
  )
}

export default App
