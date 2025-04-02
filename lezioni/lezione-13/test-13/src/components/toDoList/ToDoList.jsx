import './ToDoList.css'



export default function ToDoList({children}) {
  return (
    <>
        <div className='todos'>
            {children}
        </div>
    </>
  )
}
