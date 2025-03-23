import { useState } from 'react'
import './Button.css'

export default function Button({products, setProducts}) {

  const [aggiungiProduct, setAggiungiProduct] = useState('')

  function handleClick () {
    aggiungiProduct.trim() === '' //controllo se il campo è vuoto
      ? null
      : (
          setProducts([...products, { id: crypto.randomUUID(), nameProduct: aggiungiProduct }]),
          setAggiungiProduct('') // resetta l'input
        )
  }
  
  
  return (
    <>
      <div className='btn'>
        <input type="text" value={aggiungiProduct} 
        onChange={(e) => setAggiungiProduct(e.target.value)}/>
        <button onClick={handleClick}>Aggiungi</button>
      </div>
    </>
  )
}
