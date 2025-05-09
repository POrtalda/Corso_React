import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item/Item';

function App() {
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [listTodos, setListTodos] = useState([
    { id: crypto.randomUUID(), description: 'fare la spesa' },
    { id: crypto.randomUUID(), description: 'cucinare cena' },
  ]);
  const [selectedIds, setSelectedIds] = useState([]);

  function handleChangeTodoDescription(e) {
    setNewTodoDescription(e.target.value);
  }

  function handleClickAdd() {
    // verificare che l'utente abbia inserito qualcosa nell'input
    if (newTodoDescription !== '') {
      // aggiungere allo stato array il nuovo oggetto
      setListTodos([...listTodos, {
        id: crypto.randomUUID(),
        description: newTodoDescription
      }]);
      setNewTodoDescription('');
    }
    // se non l'ha inserito:
    else {
      // messaggio di alert
      alert('devi inserire qualcosa!!!!');
    }
  }

  function handleClickRemove(id) {
    setListTodos(listTodos.filter(todo => todo.id !== id));
  }

  function handleClickSelect(id) {
    // se nello stato selectedIds è già presente id 
    if (selectedIds.includes(id)) {
      // lo rimuoviamo da selectedIds
      setSelectedIds(selectedIds.filter(s => s !== id));
    }
    // altrimenti
    else {
      // lo dobbiamo inserire
      setSelectedIds([...selectedIds, id]);
    }
  }

  function handleChangeInputDescription(id, value) {
    // // creo un nuovo array
    // const nextListTodos = listTodos.map(todo => {
    //   // se l'id dell'array che sta ciclando è uguale all'id che voglio modificare
    //   if(todo.id === id) {
    //     return { ...todo, description: value}
    //   }
    //   // altrimenti (id che sto modificando non è quello ciclato)
    //   else {
    //     return todo;
    //   }
    // })
    // setListTodos(nextListTodos);


    setListTodos(() => listTodos.map(todo => todo.id === id
      ? { ...todo, description: value } : todo));
  }

  return (
    <>
      <h1>TODO React App</h1>
      <h2>lista delle cose da fare</h2>

      <div>
        <input type="text" value={newTodoDescription}
          onChange={handleChangeTodoDescription} />
        <button onClick={handleClickAdd}>+</button>
      </div>

      {listTodos.map(todo => (
        // <div key={todo.id}>
        //   <input type='text' value={todo.description}
        //     onChange={(e) => handleChangeInputDescription(todo.id, e.target.value)} />
        //   <button>modifica</button>
        //   <button onClick={() => handleClickSelect(todo.id)}>seleziona</button>
        //   <button onClick={() => handleClickRemove(todo.id)}>elimina</button>
        // </div>

        <Item key={todo.id} description={todo.description}
          isSelected={selectedIds.includes(todo.id)}
          onChangeInputDescription={(value) => handleChangeInputDescription(todo.id, value)} >
          {/* <button>modifica</button> */}
          <button onClick={() => handleClickSelect(todo.id)}>seleziona</button>
          <button onClick={() => handleClickRemove(todo.id)}>elimina</button>
        </Item>
      ))}

    </>
  )
}

export default App
