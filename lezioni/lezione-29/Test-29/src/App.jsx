import { useEffect, useState } from 'react'
import './App.css'
import Film from './components/Film/Film'

const API_URL = 'https://portalda.github.io/movies_fake_api/movies.json';

function App() {
  // stato che racchiuda i film
  const [movies, setMovies] = useState(null);

  // effetto collaterale che scatta quando...
  // solo quando il componente App viene montato
  useEffect(() => {
    getAPIMovies();
  }, []);

  // metodo che fa la fetch dell'endpoin movies.json
  function getAPIMovies() {

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // console.log(data); // dati restituiti dalla API
        // aggiornare lo stato movies con i dati presi dalla API
        // setMovies(data);

        // in ogni oggetto, aggiungi anche la proprietà isFavorite e di deafault mettila a false
        const newMovies = data.map(movie => (
          {...movie, isFavorite: false}
        ));
        console.log(newMovies);
        
        setMovies(newMovies); // aggiornando lo stato movies (questa volta gli oggetti avranno anche isFavorite a false)
      });

  }

  return (
    <>
      <h1>ReactFilm Libray 🎥</h1>

      {/* se movies è null, non dobbiamo ciclare l'array
          ma mostriamo un messaggio di caricamneto...
          altrimenti cicliamo l'array e, per ogni elemento (film),
          mostriamo il componente Film
      */}
      {movies !== null ? (
        movies.map(movie => (
          <Film key={movie.id} movie={movie}  />
        ))
      ) : (
        <h1>Film in caricamento...</h1>
      )}

      {/* <Film /> */}
    </>
  )
}

export default App