import './Hero.css';
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

export default function Hero({ hero_name}) {

    return(
        <>
            <div className='card-hero'>
                <h3>{ hero_name}</h3>
            <TiStarFullOutline />
            <TiStarOutline />
            </div>
        </>
    );
}