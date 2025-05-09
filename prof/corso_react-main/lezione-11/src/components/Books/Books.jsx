import './Books.css';

export default function Books({books, onClickRemove}) {
  return (
    <>
        <ul>
           {/* ciclare tutti gli elementi di books e mostrarli a schermo */}
           {books.map(b => (
            <li key={b.id}>
                <span>{b.titolo}</span>
                <button onClick={() => onClickRemove(b.id)}>elimina</button>
            </li>
           ))}
        </ul>
    </>
  )
}
