import { useState } from "react"
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa6";

export default function ButtonStar() {
    const [isLike, setIsLike] = useState(false);

    function handleClickStar() {
        setIsLike(!isLike);
    }

    return (
        <>
            <span onClick={handleClickStar}
                className={isLike ?
                    'material-symbols-outlined star-filled'
                    :
                    'material-symbols-outlined star-not-filled'}>
                star
            </span>

            <hr />

            {isLike ? (
                <TiStarFullOutline />
            ) : (
                <FaRegStar />
            )}
        </>
    )
}
