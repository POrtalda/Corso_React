import Veicle from '../veihicle/Veicle'
import './MainData.css'

export default function MainData({vehicle}) {
  return (
    <>
      <div className='main'>
        <div className='main-Data'>
          <div className='main-data-brand-model'>
            <h4>{vehicle.brand}</h4>
            <h4>{vehicle.model}</h4>
            
          </div>
          <div className='main-Data-km'>
          <p>{vehicle.km} km</p>
          </div>
        </div>

        <div className='main-img'>
          <img src={vehicle.image} alt="immagine veicolo" />
        </div>

      </div>
    </>
  )
}
