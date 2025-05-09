import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter';
import UserList from './components/UserList/UserList';

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(()=> {
  //   // l'effetto collaterale che voglio eseguire
  // }, [/* array di dipendenze = quando deve essere eseguito*/]);

  useEffect(() => {
    console.log('il componente App è stato renderizzato');
  });

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        mostra/nascondi utenti
      </button>
      <Counter />

      {isVisible && (<UserList />)}
    </>
  )
}

export default App
