import React from 'react';
import backgroundImg from '../components/back.jpg';
const Card = ({ value, flipped, onClick, width, height }) => {
  const cardStyle = {
    width: width || '100px',
    height: height || '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Añade posición relativa para colocar la imagen GIF encima de la imagen de fondo.
  };

  const cardBackStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImg})`, // Agrega la imagen de fondo
    backgroundSize: 'cover',
    backgroundPosition: '0% 50%', // Ajusta la posición de inicio (izquierda)
    animation: 'bgScroll 1s linear infinite', // Define la animación para mover la imagen de fondo
    position: 'absolute', // Coloca la imagen de fondo por debajo de la imagen GIF.
    zIndex: 0, // Establece un índice Z inferior para la imagen de fondo.
  };

  const cardImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    position: 'relative', // Añade posición relativa para la imagen GIF.
    zIndex: 1, // Establece un índice Z superior para la imagen GIF.
  };

  return (
    <div
      className={`card ${flipped ? 'flipped' : ''}`}
      onClick={onClick}
      style={cardStyle}
    >
      <div className="card-inner">
        <div className={`card-front ${flipped ? 'hidden' : ''}`}>
          <img
            src="/images/tcg-card-back.jpg"
            alt="Carta boca abajo"
            className="card-image"
            style={cardImageStyle}
          />
        </div>
        <div className={`card-back ${flipped ? '' : 'hidden'}`}>
          <div style={cardBackStyle}></div> {/* Imagen de fondo */}
          <img
            src={`images/${value}.gif`}
            alt={value}
            className="card-image"
            style={cardImageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
