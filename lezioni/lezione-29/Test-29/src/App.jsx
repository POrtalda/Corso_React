import { useEffect, useState } from 'react'
import './App.css'
import Film from './components/Film/Film'

const API_URL = 'https://portalda.github.io/movies_fake_api/movies.json';

function App() {
  // stato che racchiuda i film
  const [movies, setMovies] = useState(null);

  const[showFavorites, setShowFavorites] = useState(false)

  // effetto collaterale che scatta quando...
  // solo quando il componente App viene montato
  useEffect(() => {
    getAPIMovies();
  }, []);
  // QUESTO EFFETTO SCATTA TUTTE LE VOLTE CHE MOVIES VIENE AGGIORNATO, 
  // E QUINDI QUANDO IL CUORICINO VIENE CLICCATO
  useEffect(() => {
    if (movies !== null) {
      const favoriteIds = movies
        .filter(movie => movie.isFavorite)
        .map(movie => movie.id);
      //console.log(favoriteIds);

      // crea nel localStorage una chiave 'fav-movies'
      localStorage.setItem('fav-movies', JSON.stringify(favoriteIds))
    }
  }, [movies]);


  // metodo che fa la fetch dell'endpoin movies.json
  function getAPIMovies() {

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // console.log(data); // dati restituiti dalla API
        // aggiornare lo stato movies con i dati presi dalla API
        // setMovies(data);

        // in ogni oggetto, aggiungi anche la proprietà isFavorite e di deafault mettila a false
        // const newMovies = data.map(movie => (
        //   { ...movie, isFavorite: false }
        // ));
        // console.log(newMovies);

        // setMovies(newMovies); // aggiornando lo stato movies (questa volta gli oggetti avranno anche isFavorite a false)

        // chiediamo al local storage se ha la chiave fav-movies
        const favIds = JSON.parse(localStorage.getItem('fav-movies') || '[]') // se non c'è metti un array vuoto

        // creo una array di film ciclando data
        // per ogni film, restituiamo un oggetto identico aggiungendo
        //
        const newMovies = data.map(movie => (
          { ...movie, isFavorite: favIds.includes(movie.id) }
        ))
        setMovies(newMovies)
      });
    
  }

  function handleUpdateMovies(updateMovies) {
    // alert(`il film ${updateMovies.title} ha isFavorite: ${updateMovies.isFavorite}`)

    // crea un nuovo array di film 
    const newMovies = movies.map(movie => (
      movie.id === updateMovies.id ? updateMovies : movie
    ))

    // richiamo setMovies
    setMovies(newMovies);
  }

  return (
    <>
      <h1>ReactFilm Library 🎥</h1>

      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? 'TUTTI' : 'PREFERITI'}  
      </button>

      {/* se movies è null, non dobbiamo ciclare l'array
          ma mostriamo un messaggio di caricamneto...
          altrimenti cicliamo l'array e, per ogni elemento (film),
          mostriamo il componente Film
      */}
      {movies !== null ? (
        // è un filtro che se showFavorites è vero mappa quelli altrimenti mostra tutti i film
        (showFavorites ? movies.filter(movie => movie.isFavorite) : movies)
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