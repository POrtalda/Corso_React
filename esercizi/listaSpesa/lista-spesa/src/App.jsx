import { useState } from 'react'
import './App.css'
import Tittle from './components/tittle/Tittle'
import CardContainer from './components/cardContainer/CardContainer'
import Card from './components/card/Card'
import Acquistato from './components/acquistato/Acquistato'
import Button from './components/button/Button'

export default function App() {

  const [products, setProducts] = useState([])
  

  return (
    <>
      <Tittle />

      <CardContainer >
       <Card products = {products} onClickRemove={(id)=>setProducts(products.filter(product => product.id !== id)) }/>
      </CardContainer>

      <Button products = {products} setProducts={setProducts}/>
    </>
  )
}


