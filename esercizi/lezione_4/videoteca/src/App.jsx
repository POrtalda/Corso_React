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
      copertina: "https://www.google.com/imgres?q=film%20il%20padrino&imgurl=https%3A%2F%2Fpad.mymovies.it%2Ffilmclub%2F2002%2F08%2F056%2Flocandina.jpg&imgrefurl=https%3A%2F%2Fwww.mymovies.it%2Ffilm%2F1972%2Filpadrino%2F&docid=TEbmohu_GRipQM&tbnid=KXBytjJo4VOJ_M&vet=12ahUKEwjKo5HqwreLAxUV0QIHHbeZGyIQM3oECBgQAA..i&w=420&h=569&hcb=2&ved=2ahUKEwjKo5HqwreLAxUV0QIHHbeZGyIQM3oECBgQAA",
      acquistabile : true
    },
    {
      id: 2,
      titolo: "Il Cavaliere Oscuro",
      regista: "Christopher Nolan",
      anno: 2008,
      genere: "Azione",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F155%2Fthe-dark-knight&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000",
      acquistabile : true
    },
    {
      id: 3,
      titolo: "Schindler's List",
      regista: "Steven Spielberg",
      anno: 1993,
      genere: "Dramma",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F424%2Fschindlers-list&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000",
      acquistabile : false
    },
    {
      id: 4,
      titolo: "Pulp Fiction",
      regista: "Quentin Tarantino",
      anno: 1994,
      genere: "Crime",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F680%2Fpulp-fiction&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000",
      acquistabile : true
    },
    {
      id: 5,
      titolo: "Il Signore degli Anelli - Il Ritorno del Re",
      regista: "Peter Jackson",
      anno: 2003,
      genere: "Fantasy",
      copertina: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB-p7z75T-AhW_h_0HHQ6jC7MQjRx6BAgAEAY&url=https%3A%2F%2Fwww.themoviedb.org%2Fmovie%2F1894%2Fthe-lord-of-the-rings-the-return-of-the-king&psig=AOvVaw0v77-c3v8y6_N7j379n7-T&ust=1683838423236000",
      acquistabile : false
    }
  ]

  return (
    <>
      <Videoteca>
        {films.map(film => ( 
      <Card>
         
            <Film key={film.id} acquistabile = {film.acquistabile} 
            film={film} 
            titolo={film.titolo} 
            regista = {film.regista}
            anno = {film.anno}
            genere = {film.genere}
            copertina = {film.copertina}
            />
          <hr />
        </Card>

        ))}

      </Videoteca>
    </>
  )
}

