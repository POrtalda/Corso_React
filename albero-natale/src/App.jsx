import './App.css';
import { useEffect, useState } from "react";

function App() {
  const treeLevels = 8;
  const colors = ['red', 'blue', 'yellow', 'white', 'purple', 'orange'];

  // Stato per memorizzare posizioni e colori delle luci
  const [lights, setLights] = useState(() => {
    const initialLights = [];
    for (let level = 1; level <= treeLevels; level++) {
      for (let i = 0; i < level * 2 - 1; i++) {
        if (Math.random() < 0.4) { // 40% di probabilità di avere una luce
          initialLights.push({
            level,
            index: i,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
    }
    return initialLights;
  });

  // Animazione: Cambia colori ogni 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setLights((prevLights) =>
        prevLights.map((light) => ({
          ...light,
          color: colors[Math.floor(Math.random() * colors.length)],
        }))
      );
    }, 300); // Regola la velocità (300ms = 0.3 secondi)

    return () => clearInterval(interval); // Pulizia
  }, []);

  const generateTree = () => {
    const tree = [];
    for (let level = 1; level <= treeLevels; level++) {
      const row = [];
      for (let i = 0; i < level * 2 - 1; i++) {
        const light = lights.find((l) => l.level === level && l.index === i);
        row.push(
          <div key={`${level}-${i}`} className="branch">
            {light && <div className="light" style={{ backgroundColor: light.color }} />}
          </div>
        );
      }
      tree.push(
        <div key={level} className="row">
          {row}
        </div>
      );
    }
    // Aggiungi una stella in cima
    tree.unshift(
      <div key="star" className="row">
        <div className="star">★</div>
      </div>
    );
        // Aggiungi il tronco in basso
    tree.push(
      <div key="trunk-row-1" className="row trunk-row">
        <div className="trunk trunk-part-1"></div>
      </div>
    );

    tree.push(
      <div key="trunk-row-2" className="row trunk-row">
        <div className="trunk trunk-part-2"></div>
      </div>
    );

    tree.push(
      <div key="trunk-row-3" className="row trunk-row">
        <div className="trunk trunk-part-3"></div>
      </div>
    );

        // === REGALI SOTTO L'ALBERO ===
    const gifts = [];
    const giftColors = ['#FF0000', '#006400', '#FFD700', '#0000FF', '#FF69B4', '#FFA500']; // Rosso, verde, oro, blu, rosa, arancione
    const numGifts = 8; // Numero di regali (puoi cambiare)

    for (let i = 0; i < numGifts; i++) {
      const color = giftColors[Math.floor(Math.random() * giftColors.length)];
      const width = Math.floor(Math.random() * 40 + 50); // Da 50 a 90px
      const height = Math.floor(Math.random() * 30 + 40); // Da 40 a 70px

      gifts.push(
        <div key={`gift-${i}`} className="gift" style={{ backgroundColor: color, width: `${width}px`, height: `${height}px` }}>
          <div className="ribbon-horizontal"></div>
          <div className="ribbon-vertical"></div>
          <div className="bow"></div>
        </div>
      );
    }

    // Riga dei regali (due righe per distribuirli meglio)
    tree.push(
      <div key="gifts-row-1" className="row gifts-row">
        {gifts.slice(0, Math.ceil(numGifts / 2))}
      </div>
    );

    tree.push(
      <div key="gifts-row-2" className="row gifts-row">
        {gifts.slice(Math.ceil(numGifts / 2))}
      </div>
    );

    return tree;
  
  };

  
   return (
  <div className="app">
    <h1 className="title">Felice Natale!</h1>

    <div className="tree-container">
      <div className="tree">
        {generateTree()}
      </div>
    </div>

    {/* === EFFETTO NEVE === */}
    <div className="snowflakes">
      {Array.from({ length: 40 }, (_, i) => (  // 40 fiocchi, puoi aumentare a 80-100
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,              // Posizione orizzontale casuale
            animationDuration: `${Math.random() * 10 + 10}s`, // Da 10 a 20 secondi
            animationDelay: `${Math.random() * 10}s`,     // Partenza sfasata
            fontSize: `${Math.random() * 0.5 + 1}em`,        // Dimensione variabile
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  </div>
);
}


export default App;