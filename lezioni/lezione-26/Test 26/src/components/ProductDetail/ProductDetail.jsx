import { useParams } from 'react-router';
import './ProductDetail.css';

export default function ProductDetail() {
    //legge il parametro id dalla url
const {id} = useParams()
    return(
        <>
            <h3>Dettagli del prodotto:</h3>
            <p>id prodotto : {id}</p>
        </>
    );
}