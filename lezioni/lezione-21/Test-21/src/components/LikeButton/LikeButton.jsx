import { useContext } from 'react';
import './LikeButton.css';
import { LikeContext } from '../../context/LikeContext';

export default function LikeButton() {
const countLike= useContext(LikeContext)
    return(
        <>
            <button>like {countLike}</button>
        </>
    );
}