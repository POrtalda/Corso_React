import "./Libro.css";

export default function Libro({
  titolo,
  autore,
  genere,
  numePag,
  quantDisp,
  copertina,
}) {
  return (
    <>
      <div className="libro-container">
        <div className="libro-info">
          <p>titolo: {titolo}</p>
          <p>autore: {autore}</p>
          <p>genere: {genere}</p>
          <p>numero pagine: {numePag}</p>
          <p>quantità disponibile: {quantDisp}</p>
        </div>
        <div className="libro-copertina">
          <img  src={copertina} alt={titolo} />
        </div>
      </div>
    </>
  );
}
