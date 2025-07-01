import './Film.css';
import { FaRegHeart, FaHeart } from "react-icons/fa6";

export default function Film({ movie, toggleFavorite }) {

    return (
        <>
            <div className='card-movie'>

                <div className='img-movie'>
                    <img src={movie.img_url} alt={movie.title} />
                </div>

                <div className='like-movie' onClick={() => {
                    toggleFavorite(movie.id);
                }}>
                    {movie.isFavorite ? (
                        <FaHeart className='icon-heart' />
                    ) : (
                        <FaRegHeart className='icon-heart' />
                    )}
                </div>

                <div className='info-movie'>
                    <h2>{movie.title}</h2>
                    <h3>{movie.directed_by}</h3>
                    <p>Anno: [{movie.year}] Durata:{movie.duration}"</p>
                    <p>{movie.genres.map((genre, index) => (<span key={index}> {genre}</span>))}</p>
                    <br />
                    <hr />
                    <br />
                    <p>{movie.short_description}</p>
                </div>

                <hr />
            </div>
        </>
    );
}