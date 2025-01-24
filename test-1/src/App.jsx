
import Intestazione from './components/Intestazione'
import './App.css'
import Gatto from './components/Gatto'
import Person from './components/Person'
import Intestazione1 from './components/intestazione1'

function App() {
  

  return (
    <>
    <Gatto/>                    
      <Intestazione1 message="titolo1"/>
      <Person name="SAbrina" age="89"/>
      <Person name="Attilio" age="20"/>
      <Intestazione1 message="titolo2"/>
      

    </>
  )
}

export default App
