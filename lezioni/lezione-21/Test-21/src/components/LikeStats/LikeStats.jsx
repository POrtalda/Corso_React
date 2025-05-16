import { useContext } from 'react';
import './LikeStats.css';
import { LikeContext } from '../../context/LikeContext';

export default function LikeStats() {
const countLike = useContext(LikeContext);
    return(
        <>
            <h3>likes totali: {countLike}</h3>
        </>
    );
}