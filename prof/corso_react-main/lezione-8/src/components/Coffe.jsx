import { useState } from "react";
import { PiCoffeeBeanFill, PiCoffeeBeanLight } from "react-icons/pi";

export default function Coffe() {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <>
            <h1 onClick={()=> setIsFavorite(!isFavorite)}>
                {isFavorite ? (
                    <PiCoffeeBeanFill style={{color: 'maroon'}} />
                ) : (
                    <PiCoffeeBeanLight />
                )}
            </h1>

        </>
    )
}
