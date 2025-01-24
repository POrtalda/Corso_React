export default function Gatto() {
  const gatto = {
    nome: "muffino",
    razza: "Siamese",
    eta: 10,
    colore: "bianco",
    sesso: "femmina",
    style: {
      color: "red"
    }
  }

  const paragrafoStyle = {
    
  }
  return (
    <>
      <p style={gatto.style}>Ciao sono il componente {gatto.nome}</p>
      <img width="100" height="150" src="https://www.polivet.it/wp-content/uploads/2019/09/Senza-titolo-1.jpg"
        alt="gattino"
      />
    </>
  );
}
