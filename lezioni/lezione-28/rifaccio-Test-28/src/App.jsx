import { useEffect, useState } from 'react'
import './App.css'
import Film from './components/Film/Film'

function App() {

  const API_URL = 'https://portalda.github.io/movies_fake_api/movies.json'
  const [movies, setMovies] = useState(null)

  useEffect(()=> {
    getAPIMovies()
  }, [])

  function getAPIMovies() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        //console.log(data)

        // aggiorno lo stato setMovies con i dati della nostra API
        setMovies(data)    
      })
  }

  return (
    <>
      <h1>ReactFilm Library 🎦</h1>
      {/* se movies è null non dobbiamo ciclare l'array
      ma mostriamo un messaggio di caricamento 
      altrimenti cicliamo l'array e per ogni elemento mostriamo il 
      componente film*/}
      {movies !== null ? (
        movies.map(movie => (
          <Film key={movie.id} movie={movie} />
        ))
      ) : (
        <p>Loading...</p>
      )}

    </>
  )
}

export default App

