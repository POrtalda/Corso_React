import { useEffect, useState } from 'react'
import './App.css'
import Film from './components/Film/Film'

const API_URL = 'https://portalda.github.io/movies_fake_api/movies.json';

function App() {
  // stato che racchiuda i film
  const [movies, setMovies] = useState(null);

  // creo stato per il button dei preferiti/tutti
  const [showFavorite, setShowFavorite] = useState(false)

  // effetto collaterale che scatta quando
  // componente App viene montato
  useEffect(() => {
    getAPIMovies();
  }, []);

  // creo un useEffect che scatta tutte le volte che movies viene aggiornato,
  // quindi quando il cuoricino viene cliccato
  useEffect(() => {

    if (movies !== null) {
      // creo un array di film preferitit filtrando l'array movies
      const favoriteIds = movies.filter(movie => movie.isFavorite)
        // e prendendo solo l'id di quelli che hanno isFavorite a true
        .map(movie => movie.id)
      
        // creo nel localStorage una chiave 'fav-movies' 
        // e metto dentro l'array di id preferiti
        localStorage.setItem('fav-movies', JSON.stringify(favoriteIds))
    }
  }, [movies])

  // metodo che fa la fetch dell'endpoin movies.json
  function getAPIMovies() {

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {

        // chiediamo al LocalStorage ha a chiave 'fav-movies'
        // se non c'è metti un array vuoto
        const favIds = JSON.parse(localStorage.getItem('fav-movies')|| '[]')

        // creo un array ciclando data e per ogni film,
        // restituiamo un oggetto identico al film macon la proprietà isFavorite 
        // e valorizzalo a tru se localStorage contiene fav-movies oppure false
        const newMovies = data.map(movie => (
          {...movie, isFavorite: favIds.includes(movie.id)}
        ))
        setMovies(newMovies)
      });
      
  }

  function handleUpdateMovies(updatedMovie) {

    // crea un nuovo array di film in cui isFavorite è aggiornato
    // altrimenti inserisco il film originale
    const newMovies = movies.map(movie => (
      movie.id === updatedMovie.id ? updatedMovie : movie
    ))

    // qui richiamo setMovies
    setMovies(newMovies)
  }

  return (
    <>
      <h1>ReactFilm Library 🎥</h1>
      <button onClick={() => setShowFavorite(!showFavorite)}>
        {showFavorite ? ('TUTTI') : ('PREFERITI')}
      </button>

      {/* se movies è null, non dobbiamo ciclare l'array
          ma mostriamo un messaggio di caricamento...
          altrimenti cicliamo l'array e, per ogni elemento (film),
          mostriamo il componente Film
      */}
      {movies !== null ? (
        // questa è la logica del button 'preferiti/tutti'
        (showFavorite ? movies.filter(movie => movie.isFavorite) : movies)
        .map(movie => (
          <Film key={movie.id} movie={movie} updateMovies={handleUpdateMovies} />
        ))
      ) : (
        <h1>Film in caricamento...</h1>
      )}


    </>
  )
}

export default App