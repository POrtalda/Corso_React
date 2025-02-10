import "./Videoteca.css"

export default function Videoteca({title,children}){

    
        
    return(
        <>
        <h1>{title}</h1>
        {children}
        </>
    )
}