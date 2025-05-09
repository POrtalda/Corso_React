import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <h1>Vehicle <span style={{color: 'red'}}>Expire</span> App</h1>
        <h2>
          Controlla le <span style={{color: 'red'}}>scadenze</span>
          <br /> 
          dei tuoi <span style={{color: 'red'}}>veicoli</span> con un click!
        </h2>
      </header>
    </>
  )
}
