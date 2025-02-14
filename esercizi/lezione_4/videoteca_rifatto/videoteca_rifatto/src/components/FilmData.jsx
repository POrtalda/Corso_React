import './Button'
import Button from './Button'


export default function Filmdata({film}) {
    return (
        <>
            <div>
            <h2>{film.titolo}</h2>
            <p>[{film.genere}]</p>
            <p>durata: {film.durata}'</p>
            <p>({film.regista})</p>
            <Button titolo={film.titolo}/>
            </div>
        </>
    )
}
