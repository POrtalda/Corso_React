import './Film.css';
import { FaHeart, FaRegHeart, FaCat } from "react-icons/fa";

export default function Film({ movie }) {

    function handleClickHeart() { 
        alert('hai cliccato sul cuore!');
        // TO DO: al click sul cuore, bisogna aggiornare lo stato movies andando a 
        // modificare la proprietà isFavorite del film cliccato 
        // criticità:
        // 1. quando entriamo in questa funzione, dobbiamo avere l'id del film cliccato
        // 2. dobbiamo aggiornare lo stato moivies, ma il setMovies non è disponibile qui, ma un livello sopra (App.jsx)
    }

    return (
        <>
            <div className="card-movie">
                <div className='card-movie-img'>
                    <img src={movie.img_url} alt={movie.title} />
                </div>
                <div className='card-movie-info'>
                    <h2>{movie.title} <FaCat /></h2>
                    <h3>{movie.directed_by}</h3>
                    <p>[{movie.year}] {movie.duration}'</p>
                    <p>{movie.genres.map((genre, index) => (<span key={index}>{genre} </span>))}</p>
                    <p>{movie.short_description}</p>

                    {/* renderizzo il cuoricino pieno solo se isFavorite è true */}
                    <span onClick={handleClickHeart}>
                        {movie.isFavorite ? (
                            <FaHeart className='heart-icon' />
                        ) : (
                            <FaRegHeart className='heart-icon' />
                        )}
                    </span>

                </div>
            </div>
        </>
    );
}