import './App.css'
import Card from './components/Card'
import Film from './components/Film'
import SezioneImpresa from './components/SezioneImpresa'
import SezionePersona from './components/SezionePersona'
import Titolo from './components/Titolo'

function App() {
  const isPersonaFisica = false;

  return (
    <>
      {/* <div>
        <p>ciao</p>
      </div> */}

      <Titolo>titolo A</Titolo>

      {/* <Card>
        <Film titolo="film 1" regista="regista 1" />
        <FilmImage />
        <Buttons>
          <BtnCompra />
          <BtnAffitta />
        </Buttons>
      </Card> */}

      <Card>
        <Film
          titolo="la compagnia dell'anello"
          regista="P. Jackson"
          isDisponibile={false}
          isScontato={false}/>
      </Card>

      <Card>
        <Film
          titolo="le due torri"
          regista="P. Jackson"
          isDisponibile={true} 
          isScontato={true}/>
      </Card>

      <Titolo>titolo B</Titolo>

      {isPersonaFisica ? <SezionePersona /> : <SezioneImpresa />}




    </>
  )
}

export default App
