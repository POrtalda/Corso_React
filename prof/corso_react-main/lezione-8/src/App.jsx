import { useState } from 'react';
import './App.css'
import Counter from './components/Counter'
import Coffe from './components/Coffe';
import Input from './components/Input';
import Test from './components/Test';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('pippo');
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Test />
      <hr />
      <Input />

      <Coffe />

      <button onClick={() => setIsVisible(prev => !prev)}>
        mostra/nascondi
      </button>

      {isVisible ? (
        <div>
          <h1>{count}</h1>
          <Counter onAddButton={() => setCount(count + 1)}
            count={count} description={name}
            onChangeName={() => setName('pluto')} />
        </div>
      ) : (
        <h2>questa sezione non puoi vederla</h2>
      )}

    </>
  )
}

export default App
