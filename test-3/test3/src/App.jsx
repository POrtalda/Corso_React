
import './App.css'
import SezioneImpresa from './components/SezioneImpresa'
import SezionePersona from './components/SezionePersona'

function App() {
const isPersonaFisica = false;

  return (
    <>
      <h1>Titolo</h1>
      {(isPersonaFisica) ? <SezionePersona/> : <SezioneImpresa/>}     

    </>
  )
}

export default App
