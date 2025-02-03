import './Card.css'



export default function Card(props,acquistabile, children){
    const cardStyle ={
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: acquistabile ?  "#c3c7c7" : "#ca4b4b", /* non capisco */ 
        margin: "20px"} 
    
    
    
   
    return(
        
        <>
        <div style={cardStyle}>
            {props.children}
        </div>
        
        </>
    ) 
}