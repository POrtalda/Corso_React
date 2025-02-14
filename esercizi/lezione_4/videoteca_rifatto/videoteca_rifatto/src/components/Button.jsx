import './Button.css'
export default function Button({titolo}) {
    
    function handleClick(){
        
        alert('stai per guardare' )/* inserisci alt96 al posto degli apici*/
    }
    return (
        <>
            <button onClick={handleClick}>guarda</button>
        </>
    )
}
