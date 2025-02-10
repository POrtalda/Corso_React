

function Film_data(
      id,
      titolo,
      regista,
      anno,
      genere,
      acquistabile
) {
  return (
    <div className = 'film_data'>
     <p>Titolo: <b>{films.titolo}</b></p>
      <p>Regista: <b>{films.regista}</b></p>
      <p>Anno: <b>{films.anno}</b></p>
      <p>Genere: <b>{films.genere}</b></p>
    </div>
  )
}

export default Film_data
