import './App.css'
import Header from './components/Header';
import Test from './components/Test'
import Test2 from './components/Test2';

export default function App() {
  function handleClick() {
    alert('io sono una funzione in App.jsx');
  }

  return (
    <>
     {/* <Test onClickTest={handleClick} testo="button 1" messaggio="ciaone" /> */}

     {/* <Test2 onClickTest2={handleClick} />
     <button onClick={handleClick}>button in App.jsx</button> */}



      <Header />
    </>
  )
}


