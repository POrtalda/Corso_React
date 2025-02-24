import './App.css'

import Header from './components/Header'
import CardTotal from './components/CardTotal'
import Footer from './components/Footer'

export default function App() {

  const contacts = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Smith',
      work: 'impiegato',
      phone: '12345678',
      email: 'j.smith@gmail.com',
      image: 'https://images.pexels.com/photos/30701542/pexels-photo-30701542/free-photo-of-giovane-sorridente-con-occhiali-alla-moda-all-aperto.jpeg'
    },
    {
      id: 2,
      first_name: 'Alice',
      last_name: 'Johnson',
      work: 'insegnante',
      phone: '98765432',
      email: 'a.johnson@example.com',
      image: 'https://images.pexels.com/photos/2748498/pexels-photo-2748498.jpeg'
    },
    {
      id: 3,
      first_name: 'Bob',
      last_name: 'Williams',
      work: 'medico',
      phone: '55512345',
      email: 'b.williams@yahoo.com',
      image: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg'
    },
    {
      id: 4,
      first_name: 'Eva',
      last_name: 'Brown',
      work: 'artista',
      phone: '11122233',
      email: 'e.brown@art.com',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    },
    {
      id: 5,
      first_name: 'Charlie',
      last_name: 'Davis',
      work: 'programmatore',
      phone: '99988877',
      email: 'c.davis@code.net',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: 6,
      first_name: 'Sophia',
      last_name: 'Miller',
      work: 'scrittrice',
      phone: '44455566',
      email: 's.miller@write.com',
      image: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg'
    }
  ]


  return (
    <>
      <Header logoPiu='https://banner2.cleanpng.com/20180716/hzs/322b30b4f10b23cab633ac2cb6dbddc8.webp' />

      <CardTotal>
        <Menu />
        <Search />
        <CardContentData>
          <Image />
          <CardInfo />
        </CardContentData>
      </CardTotal>

      <Footer />
    </>
  )
}


