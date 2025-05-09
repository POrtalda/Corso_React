import { useState } from 'react';
import './App.css'
import Title from './components/Title/Title';
import Card from './components/Card/Card';
import MovieData from './components/MovieData/MovieData';
import Button from './components/Button/Button';
import Form from './components/Form/Form';

function App() {
  const [movie, setMovie] = useState({
    id: 1,
    titolo: "Inception",
    regista: "Christopher Nolan",
    durata: 148,
    locandina: "https://m.media-amazon.com/images/I/714b1KQmskL.jpg",
  });

  const [isModifyMode, setIsModifyMode] = useState(false);


  return (
    <>
      <Title label="dettagli film:" />

      <Card>

        {isModifyMode ? (
          <Form
            titolo={movie.titolo}
            regista={movie.regista}
            durata={movie.durata}
            locandina={movie.locandina}
            onChangeInput={(field, value)=> setMovie({...movie, [field]: value })}
          />
        ) : (
          <MovieData
            titolo={movie.titolo}
            regista={movie.regista}
            durata={movie.durata}
            locandina={movie.locandina}
          />
        )}

        <Button isModifyMode={isModifyMode}
          onClickButton={() => setIsModifyMode(!isModifyMode)} />

      </Card>
    </>
  );
}

export default App
