
import './App.css'
import AggiungiVeicolo from './components/aggiungiVeicolo/AggiungiVeicolo'
import Card from './components/card/Card'
import ImageCard from './components/imageCard/ImageCard'
import Title from './components/title/Title'

export default function App() {

  return (
    <>
      <Title />
      <AggiungiVeicolo />
      <Card>
        <ImageCard />
        <InfoCard />
        <ScadenzeCard>


        </ScadenzeCard>
      </Card>
    </>
  )
}

