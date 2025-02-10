import "./Card.css"

export default function Card({isAvviable,children}){

    return(
        
        <><div style= {{backgroundColor: !isAvviable  ?'#d18787' : '#aca9a9' }}>
        {children}
        
        </div></>
    )
}