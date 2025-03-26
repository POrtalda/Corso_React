
import { useState } from 'react'
import './App.css'
import Item from './components/item/Item'

export default function App() {
  const [newTodoDescription, setNewTodoDescription] = useState('')
  const [listTodos, setListTodos] = useState([
    { id: crypto.randomUUID(), description: 'fare la spesa' },
    { id: crypto.randomUUID(), description: 'fare amore' },

  ])
  const[selectedIds, setSelectedIds] = useState([''])

  function handleChangeTodoDescription(e) {
    setNewTodoDescription(e.target.value)
  }

  function handleClickAdd(){
    if (newTodoDescription!== ''){
      setListTodos([...listTodos, {
        id:crypto.randomUUID(), 
        description: newTodoDescription}])
        setNewTodoDescription('')
    } 
    else{
      alert('inserisci qualcosa')
    }
  }

  function handleClickRemove(id) {
    setListTodos(listTodos.filter(todo => todo.id !== id))
  }

  function handleClickSelect(id){
    // se nello stato selectIds è già presente id
    if(selectedIds.includes(id)){
      // lo rimuoviamo da selectIds
      setSelectedIds(selectedIds.filter(s => s!==id))
    }
    // altrimenti
    else{
      // lo dobbiamo inserire
      setSelectedIds([...selectedIds, id])
    }

    
  }

  function handleChangeInputDescription(id, value){
    setListTodos(listTodos.map(todo => 
      todo.id === id ? { ...todo, description: value } : todo
    ));
 }
 
  return (
    <>
      <h1>ToDO React app</h1>
      <h2>lista delle cose da fare</h2>

      <div>
        <input type="text" value={newTodoDescription} onChange={handleChangeTodoDescription} />
        <button onClick={handleClickAdd}>+</button>

        {listTodos.map(todo => (
            <Item key={todo.id}
              description={todo.description}
              isSelected={selectedIds.includes(todo.id)}
              onChangeInputDescription= {(value) => handleChangeInputDescription(todo.id,value)}>
              
              <button>modifica</button>

              <button onClick={() =>handleClickSelect(todo.id)}>seleziona</button>
              
              <button onClick={() => handleClickRemove(todo.id)}>elimina</button>
            </Item>
              )
              )
        }
      </div>
    </>
      )
}


