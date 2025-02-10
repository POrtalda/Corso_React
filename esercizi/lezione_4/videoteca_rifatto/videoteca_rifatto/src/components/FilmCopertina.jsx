

function Film_copertina(copertina, titolo) {
  return (
    <div className = 'film_copertina'>
      <img src = {films.copertina} alt= {films.titolo} /> 
    </div>
  )
}

export default Film_copertina
