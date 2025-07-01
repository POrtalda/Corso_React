import './Film.css';

export default function Film({ movie }) {

    return (
        <>
            <div className='card-movie'>

                <div className='img-movie'>
                    <img src={movie.img_url} alt={movie.title} />
                </div>

                <div className='info-movie'>
                    <h2>{movie.title}</h2>
                    <h3>{movie.directed_by}</h3>
                    <p>Anno: [{movie.year}] Durata:{movie.duration}"</p>
                    <p>{movie.genres.map(genre => (<span>{genre},</span>))}</p>
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