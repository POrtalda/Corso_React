import { useEffect, useState } from 'react'
import './App.css'
import Film from './components/Film/Film'

function App() {

  const API_URL = 'https://portalda.github.io/movies_fake_api/movies.json'
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    // verifico se ci sono film salvati nel LocalStorage
    const savedMovies = localStorage.getItem('movies')
    if (savedMovies) {
      // se ci sono film salvati, li recupero e li imposto nello stato
      setMovies(JSON.parse(savedMovies))
    } else {
      getAPIMovies()
    }
  }, [])

  function getAPIMovies() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        //console.log(data)

        // aggiorno lo stato setMovies con i dati della nostra API
        //setMovies(data)  
        // in ogni oggetto aggiungi anche la prop isFavorite e impostala a false
        const newMovies = data.map(movie => (
          { ...movie, isFavorite: false }
        ))

        console.log(newMovies)

        // aggiorno lo stato con il nuovo array con l'aggiunta di isFavorite
        setMovies(newMovies)

         // salva anche nel local storage
      localStorage.setItem('movies', JSON.stringify(newMovies));

        
      })
  }

  // creo una funzione per attivare i preferiti con la quale 
  // riconosco l'id del film scelto
  function toggleFavorite(id) {
    const updatedMovies = movies.map(movie =>
      movie.id === id
        ? { ...movie, isFavorite: !movie.isFavorite }
        : movie
    )
    setMovies(updatedMovies)

    // salvo i film aggiornati nel LocalStorage
    localStorage.setItem('movies', JSON.stringify(updatedMovies)) 
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
          <Film key={movie.id} movie={movie} toggleFavorite={toggleFavorite} />
        ))
      ) : (
        <p>Loading...</p>
      )}

    </>
  )
}

export default App

