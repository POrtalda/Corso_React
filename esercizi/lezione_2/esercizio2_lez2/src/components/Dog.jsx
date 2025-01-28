import './Dog.css'

/*export default function Dog(props) {
  
  

  return (
    <>
      <div className='card'>
        
        <p>ciao, io sono un {props.genere}</p>
        <p>di colore {props.colore}</p>
        <img src={props.photo} alt={props.razza} />
        <p>di razza {props.razza}</p>
        <p>mi chiamo {props.nome}</p>

        
      </div>
    </>
  );
}
*/
export default function Dog({genere, colore, photo, razza, nome}) {
  
  

  return (
    <>
      <div className='card'>
        
        <p>ciao, io sono un {genere}</p>
        <p>di colore {colore}</p>
        <img src={photo} alt={razza} />
        <p>di razza {razza}</p>
        <p>mi chiamo {nome}</p>

        
      </div>
    </>
  );
}
