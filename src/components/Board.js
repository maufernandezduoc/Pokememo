import React, { useState, useEffect } from 'react';
import Card from './Card';
import backgroundImg from '../components/Tablero.jpg';

const BackImg = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Posición de la imagen en el centro
};


const Board = ({ playerName, difficulty }) => {

  const rowsAndColumns = {
    easy: { rows: 2, columns: 4 },
    medium: { rows: 3, columns: 4 },
    hard: { rows: 5, columns: 4 },
  };
  
  const { columns } = rowsAndColumns[difficulty];

  const cardsData = {
    easy: [
      { id: 1, value: '110px-Bulbasaur_EpEc' },
      { id: 2, value: '120px-Ivysaur_EpEc' },
      { id: 3, value: '120px-Venusaur_EpEc' },
      { id: 10, value: '111px-Pikachu_EpEc' },
      // Agrega más cartas para el nivel fácil si es necesario
    ],
    medium: [
      { id: 1, value: '110px-Bulbasaur_EpEc' },
      { id: 2, value: '120px-Ivysaur_EpEc' },
      { id: 3, value: '120px-Venusaur_EpEc' },
      { id: 4, value: '94px-Charmander_EpEc' },
      { id: 5, value: '96px-Charmeleon_EpEc' },
      { id: 6, value: '114px-Charizard_EpEc' },
      // Agrega más cartas para el nivel medio si es necesario
    ],
    hard: [
      { id: 1, value: '110px-Bulbasaur_EpEc' },
      { id: 2, value: '120px-Ivysaur_EpEc' },
      { id: 3, value: '120px-Venusaur_EpEc' },
      { id: 4, value: '94px-Charmander_EpEc' },
      { id: 5, value: '96px-Charmeleon_EpEc' },
      { id: 6, value: '114px-Charizard_EpEc' },
      { id: 7, value: '115px-Squirtle_EpEc' },
      { id: 8, value: '94px-Wartortle_EpEc' },
      { id: 9, value: '119px-Blastoise_EpEc' },
      { id: 10, value: '111px-Pikachu_EpEc' },
      

      // Agrega más cartas para el nivel difícil si es necesario
    ],
  };
  const buttonStyle1 = {
    width: '60%', // Tamaño máximo del botón (30% del ancho de la pantalla)
    height: 'auto', // El alto se ajustará automáticamente
    borderRadius: '20px', // Bordes redondeados
    cursor: 'pointer',
    background: '#FFCC01', // Color de fondo del botón
  };

  const buttonStyle2 = {
    width: '30%', // Tamaño máximo del botón (30% del ancho de la pantalla)
    height: 'auto', // El alto se ajustará automáticamente
    borderRadius: '20px', // Bordes redondeados
    cursor: 'pointer',
    background: '#FFCC01', // Color de fondo del botón
  };
  
  const imageStyle = {
    width: '80%', // Tamaño de la imagen dentro del botón
    height: 'auto', // El alto se ajustará automáticamente
  };
 


  const selectedCards = cardsData[difficulty];

  const [cards, setCards] = useState([]);
const [flippedIndices, setFlippedIndices] = useState([]);
const [matchedPairs, setMatchedPairs] = useState([]);
const [startTime, setStartTime] = useState(0);
const [elapsedTime, setElapsedTime] = useState(0);
const [showVictoryCard, setShowVictoryCard] = useState(false);



  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || matchedPairs.includes(index)) return;

    if (flippedIndices.length === 0) {
      setFlippedIndices([index]);
    } else if (flippedIndices.length === 1) {
      const [firstIndex] = flippedIndices;
      if (firstIndex === index) return;

      const [firstCard, secondCard] = [cards[firstIndex], cards[index]];
      if (firstCard.value === secondCard.value) {
        setMatchedPairs([...matchedPairs, firstIndex, index]);
        setFlippedIndices([]); // Voltear las cartas si son iguales
      } else {
        setFlippedIndices([...flippedIndices, index]);
        setTimeout(() => {
          setFlippedIndices([]); // Voltear las cartas si no son iguales
        }, 1000);
      }
    }
  };

  const handlePlayAgain = () => {
    // Reiniciar el juego aquí
    setFlippedIndices([]);
    setMatchedPairs([]);
    setShowVictoryCard(false);
    setStartTime(Date.now());
    shuffleAndSetCards();
  };

  const shuffleAndSetCards = () => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    setCards(shuffledCards);
  };

  const [gameStarted, setGameStarted] = useState(false); // Agrega el estado para controlar si el juego ha iniciado


// eslint-disable-next-line  
useEffect(() => {
  const initialCards = [...selectedCards, ...selectedCards];
  const shuffledCards = shuffleCards(initialCards);
  setCards(shuffledCards);
  setStartTime(Date.now());
  setGameStarted(true); // Marcamos el juego como iniciado al cargar las cartas
}, [difficulty]);

useEffect(() => {
  if (gameStarted && matchedPairs.length === cards.length) { // Verificamos si el juego ha iniciado antes de mostrar la victoria
    const endTime = Date.now();
    const elapsedTime = Math.floor((endTime - startTime) / 1000);
    setElapsedTime(elapsedTime);
    setShowVictoryCard(true);
  }
}, [gameStarted, matchedPairs, startTime, cards.length]);


return (
  <div
    className="board"
    style={{
      ...BackImg,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column', // Cambia a un diseño de columna
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        justifyContent: 'center',
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          value={card.value}
          flipped={flippedIndices.includes(index) || matchedPairs.includes(index)}
          onClick={() => handleCardClick(index)}
          style={{ width: '100%', height: '100%' }}
        />
      ))}
    </div>
    {showVictoryCard && (
        <div className="victory-overlay" style={{ textAlign: 'center' }}>
          <div className="victory-card">
            <img
              src="/images/200px-Trofeo_de_Poké_Ball_SSB4_(Wii_U).png"
              alt="Victoria"
              className="victory-image"
            />
            <p>{playerName}</p>
            <p>¡Ganaste!</p>
            <p>¡Lo lograste en {elapsedTime} segundos!</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column', // Mostrar elementos en una columna
                alignItems: 'center', // Centrar horizontalmente
                gap: '10px', // Espacio entre elementos
              }}
            >
              <button onClick={handlePlayAgain} style={buttonStyle1}>
                <img
                  src="/Volver-a-jugar-23-09-2023.gif"
                  alt="Volver-a-jugar"
                  style={imageStyle}
                />
              </button>
              <button onClick={() => window.location.reload()} style={buttonStyle2}>
                <img src="/Salir-23-09-2023.gif" alt="Salir" style={imageStyle} />
              </button>
            </div>
          </div>
        </div>
      )}

    {/* Botón de reinicio */}
    <button onClick={() => window.location.reload()} style={buttonStyle2}>
      <img src="/Salir-23-09-2023.gif" alt="Salir" style={imageStyle} />
    </button>
  </div>
);
};




// Función para barajar las cartas
const shuffleCards = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default Board; 