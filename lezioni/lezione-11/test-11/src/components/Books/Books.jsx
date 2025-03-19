import './Books.css'

export default function Books({books, onClickRemove}) {
  return (
   <>
   <ul>
    {books.map(b => (
        <div key={b.id}>
            <li >
                <span>{b.titolo}</span> 
                <button onClick={()=> onClickRemove(b.id)}>elimina</button>
                </li>
        </div>
    ))}
   </ul>
   
   </>
  )
}
