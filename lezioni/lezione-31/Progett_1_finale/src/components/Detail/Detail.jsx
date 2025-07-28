import { useNavigate, useParams } from 'react-router';
import './Detail.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { IoPlayBackCircle } from "react-icons/io5";

export default function Detail({children, heroes}) {

    // recuperare id dell'eroe dall'url
    const {id} = useParams() // attenzione questa è una stringa

    // trovare gli altri dati dell'eroe con quel id
    const hero = heroes ? heroes.find(h => h.id.toString() === id.toString()) : {}

    const navigate = useNavigate()

    const { isDarkMode } = useContext(ThemeContext)
   
    return(
        <>
        {children}
            <div className={isDarkMode ? 'hero-detail-card dark' : 'hero-detail-card light'}>
                <h2>{hero.name}</h2>
                <p>eta: {hero.age}</p>
                <p>genere: {hero.genre}</p>
                <p>poteri: {hero.powers}</p>
                <img src={hero.img_url} alt={hero.name} />
                <p>stato: {hero.is_alive ? 'vivo' : 'morto'}</p>

            </div>

            <button onClick={() => navigate('/')}>
                <IoPlayBackCircle style={{fontSize: "40px"}}/>
            </button>
        </>
    );
}