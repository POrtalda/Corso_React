import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Vehicle from './components/Vehicle/Vehicle';
import MainData from './components/MainData/MainData';
import ExpireData from './components/ExpireData/ExpireData';

function App() {
  const [vehicles, setVehicles] = useState([
    {
      id: crypto.randomUUID(),
      brand: 'FIAT',
      model: 'Panda',
      plate: 'AA444BB',
      km: 88542,
      expiring: {
        insurance: new Date(2026, 3, 4),
        roadTax: new Date(2025, 3, 25),
        service: new Date(2026, 11, 16),
        inspection: new Date(2023, 1, 1)
      },
      color: 'blu',
      image: 'https://graphics.gestionaleauto.com/gonline_graphics/18115404_E_6381e10fd09f4.jpg',
      insuranceCompany: 'Pippo Pluto e Paperino s.r.l',
      note: 'ricordarsi di fare sostituire lo specchietto da Mimmo il carrozziere!'
    },
    {
      id: crypto.randomUUID(),
      brand: 'Volkswagen',
      model: 'Golf',
      plate: 'CD123EF',
      km: 120300,
      expiring: {
        insurance: new Date(2025, 6, 12),
        roadTax: new Date(2025, 5, 30),
        service: new Date(2025, 11, 10),
        inspection: new Date(2024, 9, 15)
      },
      color: 'grigio',
      image: 'https://www.patentati.it/blog/foto-hd/nuova-volkswagen-golf-7-grigia-tre-quarti-anteriore-lato-destro.jpg',
      insuranceCompany: 'Assicurazioni SuperVeloci S.p.A',
      note: 'gomme da cambiare entro fine anno'
    },
    {
      id: crypto.randomUUID(),
      brand: 'Yamaha',
      model: 'MT-07',
      plate: 'GH567IJ',
      km: 23000,
      expiring: {
        insurance: new Date(2025, 4, 1),
        roadTax: new Date(2025, 6, 10),
        service: new Date(2025, 7, 20),
        inspection: new Date(2023, 8, 10)
      },
      color: 'nero',
      image: 'https://motoservice.net/wp-content/uploads/2020/10/MT07-Tech_Black.jpg',
      insuranceCompany: 'MotoFast s.r.l',
      note: 'controllare pastiglie freni prima del prossimo giro in montagna'
    },
    {
      id: crypto.randomUUID(),
      brand: 'Fiat',
      model: 'Ducato Camper',
      plate: 'LM890NO',
      km: 75800,
      expiring: {
        insurance: new Date(2026, 1, 28),
        roadTax: new Date(2025, 11, 5),
        service: new Date(2026, 4, 18),
        inspection: new Date(2024, 3, 12)
      },
      color: 'bianco',
      image: 'https://carcamp.it/cdn/shop/products/28066906_400x@2x.jpg?v=1678750522',
      insuranceCompany: 'ViaggiaSereno Group',
      note: 'verificare funzionamento impianto elettrico interno'
    }
  ]);


  return (
    <>
      <Header />
      {vehicles.map(vehicle => (
        <Vehicle key={vehicle.id}>
          <MainData vehicle={vehicle} />
          <ExpireData expiring={vehicle.expiring} />
        </Vehicle>
      ))}

    </>
  )
}

export default App

// [0] gennaio
// [1] febbraio