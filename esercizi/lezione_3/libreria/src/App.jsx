import './App.css'
import Libreria from './components/Libreria'
import Card from './components/Card'
import Libro from './components/Libro'


function App() {
  return (
    <>
      
      <Libreria>
        <Card>
        <p>questo è il  contenuto della card</p>   
        </Card>
      </Libreria>
    </>
  )
}

export default App
