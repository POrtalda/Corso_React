import './FilmImage.css'


export default function FilmImage({copertina}) {
    return (
        <>
            <div>
                <img src={copertina} alt="locandina films" width={150} />
            </div>
        </>
    )
}