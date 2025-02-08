import "./Card.css"

export default function Card({acquistabile, children}){

    return(
        <><div>
            {/* qui metto la condizione che se è acquistabile la card ha un colore grigio, in caso contrario un colore rosso */}
        {children}
        
        </div></>
    )
}