import { useNavigate, useParams } from 'react-router';
import './Detail.css';

export default function Detail({children, heroes}) {

    // recuperare id dell'eroe dall'url
    const {id} = useParams() // attenzione questa è una stringa

    // trovare gli altri dati dell'eroe con quel id
    const hero = heroes.find(h => h.id.toString() === id.toString())

    const navigate = useNavigate()
   
    return(
        <>
        {children}
            <div>
                <p>nome: {hero.name}</p>
                <p>eta: {hero.age}</p>
                <p>genere: {hero.genre}</p>
                <p>poteri: {hero.powers}</p>
                <img src={hero.img_url} alt={hero.name} />
                <p>stato: {hero.is_alive ? 'vivo' : 'morto'}</p>

            </div>

            <button onClick={() => navigate('/')}>indietro</button>
        </>
    );
}