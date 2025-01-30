import './App.css'
import Cat from './components/Cat'
import Intestazione from './components/Intestazione'
import Person from './components/Person'

function App() {

  return (
    <>
      
      {/* <Cat />
      <Cat /> */}
      
      <Intestazione message="titolo 1" />

      <Person name="Pippo" surname="Rossi" age="89" />
      <Person name="Sabrina" surname="Verdi" age="44" />
      <Person name="Filippo" surname="Gialli" age="10" />

      <Intestazione message="titolo 2"/>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero omnis rerum, ea eveniet modi necessitatibus sit consequuntur possimus non. Aut recusandae voluptatem reprehenderit quae in facilis, placeat quod veritatis cumque, officiis distinctio! Eaque fugiat error assumenda voluptate sequi cum quo dolor non, quas itaque minus! Amet, doloribus ipsum asperiores alias velit vitae deserunt quisquam odit quia, accusamus placeat mollitia! Nulla dolore in architecto deserunt, porro perspiciatis tempore quam quasi? Provident qui explicabo porro in fugit, commodi exercitationem odio reiciendis. Nulla perferendis dolor aliquid illo aspernatur. Accusantium quibusdam error reprehenderit, aliquid deleniti vero, sunt totam iusto pariatur perferendis ut quam minima!
      </p>

      <Intestazione message="titolo 3"/>


    </>
  )
}

export default App
