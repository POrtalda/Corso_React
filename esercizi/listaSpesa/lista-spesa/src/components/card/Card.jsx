import './Card.css'

export default function Card({ products }) {
  return (
    <>
      <ul>
        {products.map((product) => (
          <div key={product.id} className='card'>
          <li >{product.nameProduct}</li>
          <button>fatto</button>
          </div>
        ))}
      </ul>
    </>
  )
}
