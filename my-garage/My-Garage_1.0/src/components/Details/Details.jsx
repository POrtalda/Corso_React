import { useParams } from 'react-router';
import './Details.css';

export default function Details({ children, vehicles }) {

    // devo recuperare l'id del veicolo dalla url
    const {id} = useParams();

    // devo trovare i dati del veicolo con quell' id
    const vehicle = vehicles.find(v => v.id.toString() === id.toString());
    
    // Se non ho ancora i dati o il veicolo non esiste
    if (!vehicle) {
        return (
            <>
                {children}
                <div className="card-details">
                    <p>Caricamento dati veicolo...</p>
                </div>
            </>
        );
    }

    return (
        <>
            {children}
            <div className='card-details'>
                <h1>{`${vehicle.brand} ${vehicle.model}`}</h1>
                <img src={vehicle.img_url} alt={`${vehicle.brand} ${vehicle.model}`} />
            </div>
        </>
    );
}

