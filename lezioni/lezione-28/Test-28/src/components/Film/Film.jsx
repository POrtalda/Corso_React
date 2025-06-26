import './Film.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Film({ movie, toggleFavorite }) {

    function handleClicHeart(){
        // alert('ti piace')
        toggleFavorite(movie.id)
        // TO DO al click sul cuore bisogna aggiornare lo stato movies andando a 
        // modificare la proprietà isFavorite del film cliccato
        // criticita:
        // 1. questa funzione deve racchiudere anche l'id
        // 2. dobbiamo aggiornare lo stato movies, ma il setMovies è disponibile ad un ivello sopra,
        //    cioè in app.jsx
    }

    return (
        <>
            <div className='card-movie'>
                <div className='card-movie-img'>
                    <img src={movie.img_url} alt={movie.title} />
                </div>

                <div className='card-movie-info'>
                    <h2>{movie.title}</h2>
                    <h3>{movie.directed_by}</h3>
                    <p>[{movie.year}] {movie.duration}"</p>
                    <p>{movie.genres.map((genre, index) => (<span key={index}>{genre} </span>))}</p>
                    <p>{movie.short_description}</p>
                    {/* renderizzo il cuore pieno solo se isFavorite è true */}
                    <span onClick={handleClicHeart}>
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