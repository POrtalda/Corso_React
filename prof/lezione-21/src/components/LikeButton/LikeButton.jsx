import { useContext } from 'react';
import './LikeButton.css';
import { LikeContext } from '../../context/LikeContext';

export default function LikeButton() {
    const data = useContext(LikeContext);

    return(
        <>
            <button>like! ({data})</button>
        </>
    );
}