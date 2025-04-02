
import { useState } from 'react'
import './App.css'
import ToDoList from './components/toDoList/ToDoList';
import ToDoItem from './components/toDoList/toDoItem/ToDoItem';
import ToDoEditForm from './components/toDoList/toDoEditForm/ToDoEditForm';
import { FiEdit } from "react-icons/fi";

export default function App() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), description: 'fare la spesa' },
    { id: crypto.randomUUID(), description: 'lavare la macchina' },
    { id: crypto.randomUUID(), description: 'portare a spasso il cane' },
    { id: crypto.randomUUID(), description: 'andare in palestra' },
    { id: crypto.randomUUID(), description: 'leggere un libro' },
    { id: crypto.randomUUID(), description: 'cucinare la cena' },
    { id: crypto.randomUUID(), description: 'chiamare un amico' },
    { id: crypto.randomUUID(), description: 'scrivere un’email di lavoro' },
    { id: crypto.randomUUID(), description: 'fare il bucato' },
    { id: crypto.randomUUID(), description: 'pagare le bollette' },
    { id: crypto.randomUUID(), description: 'fare una passeggiata' }
  ]);

  const [isEditMode, setIsEditMode] = useState(false)

  const [editItemId, setEditItemId] = useState(null)


  function handleClickEdit(id) {
    setIsEditMode(true)
    setEditItemId(id)
  }

  function handleClickBack(){

    setIsEditMode(false)
    setEditItemId(null)
  }

  function handleChangeInput(value) {
    setTodos(() => todos.map(t => t.id === editItemId ? {...t, description: value} : t))
  }
  return (
    <>
      <header>
        <h1>To Do List React v.2</h1>
      </header>

      {
        isEditMode ? (
          <ToDoEditForm handleClickBack = {handleClickBack}
          handleChangeInput={(value) => handleChangeInput(value)}
          item={todos.find(t => t.id ===editItemId)} />

        ) : (
          <ToDoList>
            {todos.map(todo => (
              <ToDoItem key={todo.id} item={todo}>
                <div onClick={() => handleClickEdit(todo.id)}>
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


