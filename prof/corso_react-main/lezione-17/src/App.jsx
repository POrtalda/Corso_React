import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test/Test';
import Data from './components/Data/Data';
import Clock from './components/Clock/Clock';
import Converter from './components/Converter/Converter';
import Timer from './components/Timer/Timer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Test />
      <Data />
      <Clock />
      <Converter />
      <Timer />
    </>
  )
}

export default App
