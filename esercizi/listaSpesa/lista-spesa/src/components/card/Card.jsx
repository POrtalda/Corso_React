import './Card.css'

export default function Card({ products, onClickRemove }) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <div key={product.id} className='card'>
          <li >{product.nameProduct}</li>
          <button>fatto</button>
          <button onClick={()=> onClickRemove(product.id)}>rimuovi</button>
          </div>
        ))}
      </ul>
    </>
  )
}
