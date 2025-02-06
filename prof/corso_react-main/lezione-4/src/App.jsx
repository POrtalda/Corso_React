import { Fragment } from 'react';
import './App.css'
import Card from './components/Card'
import Office from './components/Office'
import User from './components/User'

function App() {
  const users = [
    { id: 1, fName: 'Gandalf', lName: 'Il Grigio', job: 'Mago', age: 90, series: 'Il Signore degli Anelli' },
    { id: 2, fName: 'Walter', lName: 'White', job: 'Insegnante di chimica', age: 50, series: 'Breaking Bad' },
    { id: 3, fName: 'Rick', lName: 'Sanchez', job: 'Scienziato', age: 70, series: 'Rick and Morty' },
    { id: 4, fName: 'Tyrion', lName: 'Lannister', job: 'Consigliere', age: 39, series: 'Game of Thrones' },
    { id: 5, fName: 'Sherlock', lName: 'Holmes', job: 'Detective', age: 40, series: 'Sherlock' },
    { id: 6, fName: 'Merlino', lName: 'Ambrosius', job: 'Mago', age: 150, series: 'Merlin' },
    { id: 7, fName: 'Harry', lName: 'Potter', job: 'Mago', age: 30, series: 'Harry Potter' },
    { id: 8, fName: 'Tony', lName: 'Stark', job: 'Ingegnere', age: 48, series: 'Marvel Cinematic Universe' },
    { id: 9, fName: 'Homer', lName: 'Simpson', job: 'Ispettore di sicurezza', age: 39, series: 'The Simpsons' },
    { id: 10, fName: 'Doctor', lName: 'Strange', job: 'Mago', age: 45, series: 'Marvel Cinematic Universe' }
  ];

  // const usersMaghi = users.filter(user => user.job === 'Mago');
  // const usersM = users.filter(user => user.fName.startsWith('M'))


  const colors = ['rosso', 'blu', 'giallo'];

  return (
    <>
      <h1>test office</h1>
      {colors.map((color, index) => (
        <p key={index}>{color}</p>
      ))}

      {colors.map((color, index) => (
        <p key={index}>{color}</p>
      ))}

      <Office>

        {/* sintassi più compatta: filter + map */}
        {users.filter(user => user.job === "Mago")
          .map(mago => (
            <Card key={mago.id} >
              <User name={mago.fName} surname={mago.lName} />
            </Card>
          ))}

        {/* sintassi con variabile di appoggio ottenuta con filter */}
        {/* {usersMaghi.map(mago => (
          <Card key={mago.id} >
            <User name={mago.fName} surname={mago.lName} />
          </Card>
        ))} */}

        {/* {users.map(user => (
            <Card key={user.id} >
              <User name={user.fName} surname={user.lName} />
            </Card>  
        ))} */}

        {/* <Card>
          <User name={users[0].fName} surname={users[0].lName} />
        </Card> */}

      </Office>
    </>
  )
}

export default App
