export default function Test(){
    function handleClick(){
        alert('hai cliccato il bottone')
    }

    return(
        <>
        <button onClick={handleClick}>Cliccami</button>

        
        </>
    )
}