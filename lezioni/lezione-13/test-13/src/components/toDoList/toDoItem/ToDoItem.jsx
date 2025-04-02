import './ToDoItem.css'



export default function ToDoItem({item, children}) {
  return (
    <>
        <div className='todo'>
            <p>{item.description }</p>

            {children}
        </div>
    </>
  )
}
