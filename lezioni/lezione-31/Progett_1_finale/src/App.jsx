import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'

function App({ children, heroes, toggleFavorite }) {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* children è il menu */}
      {children}
      {heroes !== null ? (
        heroes.map(h => (
        <Hero key={h.id} hero={h} toggleFavorite={() => toggleFavorite(h.id)}/>))

      ) : (
        <h1>nessun supereore disponibile...</h1>
      )}
    </>
  )
}

export default App
