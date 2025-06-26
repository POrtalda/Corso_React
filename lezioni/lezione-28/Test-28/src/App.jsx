import { useEffect, useState } from 'react'

import './App.css'
import Film from './components/Film/Film'

const API_URL = "https://portalda.github.io/movies_fake_api/movies.json"

function App() {

  // creo uno stato che racchiuda i films
  const [movies, setMovies] = useState(null)

  // creo effetto collaterale che scatta solo quandoil componente App viene montato
  useEffect(() => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    } else {
      getAPIMovies()
    }

  }, [])

  // aggiungo un altro useEffect per salvare in localSorage 
  // ogni volta che cambia movies
  useEffect(() => {
    if (movies !== null) {
      localStorage.setItem('movies', JSON.stringify(movies))
    }
  }, [movies])

  // creo una funzione che modifica array movies invertendo 
  // il valore di isFavorite del film con quel ID
  function toggleFavorite(id) {
    const updateMovies = movies.map(movie =>
      movie.id === id ?
        { ...movie, isFavorite: !movie.isFavorite }
        :
        movie

    )
    setMovies(updateMovies)
  }

  // creo un metodo che fa la fetch dell'endpoint movies.json
  function getAPIMovies() {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        //dati restituiti dalla API
        //console.log(data)

        // in ogni oggetto aggiungi anche la proprietà isFavorite e di default mettila false
        const newMovies = data.map(movie => (
          { ...movie, isFavorite: false }
        ))
        console.log(newMovies)

        // devo aggiornare lo stato movies con i dati presi 
        // dal nostro api ma con l'aggiunta della proprietà isFavorite
        setMovies(newMovies)
      })
  }


  return (
    <>

      <h1>React Film Library 📽</h1>
      {/* se movies è null non dobbiamo ciclare l'array, 
      ma mostriamo un messaggio di caricamento 
      altrimenti cicliamo l'array e per ogni film mostriamo 
      il componente Film*/}
      {movies !== null ? (
        movies.map(movie => (
          <Film key={movie.id} movie={movie} toggleFavorite={toggleFavorite} />
        ))
      ) : (
        <h1>Film in caricamento</h1>
      )}

    </>
  )
}

export default App
