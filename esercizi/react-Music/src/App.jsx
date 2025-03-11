
import './App.css'
import NavBar from './components/NavBar'
import Search from './components/Search'
import Main from './components/Main'
import { useState } from 'react';
export default function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  return (
    <>
     <NavBar isDarkModeActive={isDarkModeActive}
              setIsDarkModeActive={setIsDarkModeActive}
               />

     <Search isDarkModeActive={isDarkModeActive}
              setIsDarkModeActive={setIsDarkModeActive}/>

     <Main isDarkModeActive={isDarkModeActive}
              setIsDarkModeActive={setIsDarkModeActive}/>
    </>
  )
}

 
