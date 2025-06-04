import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList/ToDoList';
import ToDoItem from './components/ToDoItem/ToDoItem';
import ToDoEditForm from './components/ToDoEditForm/ToDoEditForm';
import { FiEdit } from "react-icons/fi";


function App() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), description: 'fare la spesa' },
    { id: crypto.randomUUID(), description: 'andare in palestra' },
    { id: crypto.randomUUID(), description: 'chiamare il dottore' },
    { id: crypto.randomUUID(), description: 'pagare le bollette' },
    { id: crypto.randomUUID(), description: 'studiare React' },
    { id: crypto.randomUUID(), description: 'preparare la cena' },
    { id: crypto.randomUUID(), description: 'portare fuori il cane' },
    { id: crypto.randomUUID(), description: 'leggere un libro' },
    { id: crypto.randomUUID(), description: 'riordinare la casa' },
    { id: crypto.randomUUID(), description: 'scrivere una mail di lavoro' },
    { id: crypto.randomUUID(), description: 'fare una passeggiata' },
  ]);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  function handleClickEdit(id) {
    setIsEditMode(true);
    setEditItemId(id);
  }
  function handleClickBack() {
    setIsEditMode(false);
    setEditItemId(null);
  }

  function handleChangeInput(value) {
    setTodos(()=> todos.map(t => t.id === editItemId ? {...t, description: value} : t))
  }

  return (
    <>

      <header>
        <h1>To Do List React v.2</h1>
      </header>

      {
        isEditMode ? (
          <ToDoEditForm handleClickBack={handleClickBack} 
            handleChangeInput={(value)=>handleChangeInput(value)}
            item={todos.find(t => t.id === editItemId)}/>
        ) : (
          <ToDoList>
            {todos.map(todo => (
              <ToDoItem key={todo.id} item={todo}>
                <div onClick={()=>handleClickEdit(todo.id)}>
                  <FiEdit style={{ fontSize: '30px' }} />
                </div>
              </ToDoItem>
            ))}
          </ToDoList>
        )
      }





    </>
  )
}

export default App
