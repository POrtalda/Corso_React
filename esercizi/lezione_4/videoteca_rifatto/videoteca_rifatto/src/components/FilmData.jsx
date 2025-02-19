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


            {film.is_available ? (
                <Button titolo={film.titolo}/>
                ) : (
                    <div style={{backgroundColor: 'yellow'}}>il film non è disponibile</div>
                )}
            
            </div>
        </>
    )
}
