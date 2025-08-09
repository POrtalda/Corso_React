import { useParams } from 'react-router';
import './ProductDetail.css';

export default function ProductDetail() {
    const {id} = useParams();

    return(
        <>
            <h3>DETTAGLI DEL PRODOTTO</h3>
            <p>ID prodotto selezionato: {id}</p>
        </>
    );
}