import Videoteca from './components/Videoteca'
import Card from './components/Card'
import './App.css'
import Film from './components/Film'

export default function App() {

  const films = [
    {
      id: 1,
      titolo: "Il Padrino",
      regista: "Francis Ford Coppola",
      anno: 1972,
      genere: "Crime",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F238%2Fthe-godfather&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000"
    },
    {
      id: 2,
      titolo: "Il Cavaliere Oscuro",
      regista: "Christopher Nolan",
      anno: 2008,
      genere: "Azione",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F155%2Fthe-dark-knight&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000"
    },
    {
      id: 3,
      titolo: "Schindler's List",
      regista: "Steven Spielberg",
      anno: 1993,
      genere: "Dramma",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F424%2Fschindlers-list&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000"
    },
    {
      id: 4,
      titolo: "Pulp Fiction",
      regista: "Quentin Tarantino",
      anno: 1994,
      genere: "Crime",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F680%2Fpulp-fiction&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000"
    },
    {
      id: 5,
      titolo: "Il Signore degli Anelli - Il Ritorno del Re",
      regista: "Peter Jackson",
      anno: 2003,
      genere: "Fantasy",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F1894%2Fthe-lord-of-the-rings-the-return-of-the-king&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000"
    }
  ]

  return (
    <>
      <Videoteca>
        
      <Card>
          {films.map(film => (
            <Film key={film.id} film={film} />
          ))}
        </Card>

        

      </Videoteca>
    </>
  )
}

