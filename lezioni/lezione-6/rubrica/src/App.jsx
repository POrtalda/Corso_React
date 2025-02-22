
import './App.css'
import Button from './components/Button'
import CardContact from './components/CardContact'
import CardContactDetails from './components/CardContactDetails'
import CardContactEdit from './components/CardContactEdit'
import CardContactNew from './components/CardContactNew'

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
      {/* <h1>ReactContact</h1>
      {contacts.map(contact => (
        <CardContact key={contact.id} contact={contact}>
          <Button type='edit' name={contact.first_name} />
          <Button type='delete' />

        </CardContact>
      ))}
      <div style={{display:'flex', justifyContent:'center', }}>
        <Button type='add' />
      </div> */}

      {/* <CardContactDetails contact = {contacts[0]}/> */}
      
        {/* <CardContactEdit contact={contacts[0]}/> */}
        <CardContactNew contact={contacts[0]}/>
          
      
    </>
  )
}
