import "./Film.css"

export default function Film({  titolo, regista, anno, genere, copertina, acquistabile }) {
    
    return (
        <>
            <div className="film-info">
                <p>Titolo: <b>{titolo}</b></p>
                <p>Regista: <b>{regista}</b></p>
                <p>Anno: <b>{anno}</b></p>
                <p>Genere: <b>{genere}</b></p>


            </div>
            <div className="film-copertina">
                <img src={copertina} alt={titolo} />
            </div>

            <div >
                <button disabled={!acquistabile}>
                    {acquistabile ? "Acquista" : "Esaurito"}
                </button>
            </div>


        </>
    )
}