import { useState } from 'react'
import './App.css'
import Tittle from './components/tittle/Tittle'
import CardContainer from './components/cardContainer/CardContainer'
import Card from './components/card/Card'
import Acquistato from './components/acquistato/Acquistato'
import Button from './components/button/Button'

export default function App() {

  const [products, setProducts] = useState([{
    id: 1, product: 'pane',
  }])

  return (
    <>
      <Tittle />

      <CardContainer>
        <Card />
        <Acquistato />
      </CardContainer>

      <Button />
    </>
  )
}


