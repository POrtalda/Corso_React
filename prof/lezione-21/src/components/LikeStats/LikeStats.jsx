import { useContext } from 'react';
import './LikeStats.css';
import { LikeContext } from '../../context/LikeContext';

export default function LikeStats() {

    const data = useContext(LikeContext);

    return(
        <>
            <h3>likes totali: {data}</h3>
        </>
    );
}