import './Form.css';

export default function Form({ titolo, regista, durata, locandina, onChangeInput }) {
  return (
    <>
      <div className='movie-form'>
        <label>titolo: </label>
        <input type="text" value={titolo}
          onChange={(e) => onChangeInput('titolo', e.target.value)} 
          />

        <label>regista: </label>
        <input type="text" value={regista} 
         onChange={(e) => onChangeInput('regista', e.target.value)} 
         />

        <label>durata: </label>
        <input type="number" value={durata}
         onChange={(e) => onChangeInput('durata', e.target.value)} 
        />

        <label>url locandina: </label>
        <input type="text" value={locandina}
         onChange={(e) => onChangeInput('locandina', e.target.value)} 
        />
      </div>
    </>
  )
}
