import "./Libro.css";

export default function Libro({
  titolo,
  autore,
  genere,
  numePag,
  quantDisp,
  copertina,
  acquistabile
}) {
  
  const quantMinima = quantDisp <= 3;

  const quantitaStyle = {
    color: quantMinima ? "red" : "green",
    border: quantMinima ? "1px solid red" : "1px solid green"
  }

  return (
    <>
      <div className="libro-container">
        <div className="libro-info">
          <p>titolo: <b>{titolo} </b></p>
          <p>autore: <b>{autore}</b> </p>
          <p>genere: <b>{genere} </b></p>
          <p>numero pagine: <b>{numePag}</b></p>
          
          {acquistabile ? (
            <p style={quantitaStyle} > quantità disponibile: <b> {quantDisp} </b> 
            </p>) : ("")
          }
          
        </div>

        <div className="libro-copertina">
          <img  src={copertina} alt={titolo} />
        </div>

        {
          !acquistabile && (
            <div className="noAcquistabile">
              <p>
                <b>Non disponibile</b>
              </p>
              {(quantDisp = "")}
            </div>
          )
        }
      </div>

      
    </>
  );
}
