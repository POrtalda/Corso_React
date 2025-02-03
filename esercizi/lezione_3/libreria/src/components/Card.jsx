import './Card.css'



export default function Card(props){
    const cardStyleDisponibile ={display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#c3c7c7", margin: "20px"} 
    const cardStyleNONDisponibile ={display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ca4b4b", margin: "20px"} 
    
    
   
    return(
        
        <>
        <div style={cardStyleDisponibile}>
            {props.children}
        </div>
        
        </>
    ) 
}