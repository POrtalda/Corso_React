export default function Person({name, surname}) {

    return (
        <>
            <p>{surname}</p>
        </>
    )
}







const libro = {
    id: 1,
    titolo: 'il signore degli anelli',
    autore: 'j.r.r. tolkien'
}

const {titolo, autore} = libro;

console.log(titolo)
console.log(autore)










