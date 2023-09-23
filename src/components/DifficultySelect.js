import React from 'react';
import backgroundImg from '../components/Dificulty.jpg';




const DifficultySelect = ({ onNextClick }) => {
  const handleDifficultySelect = (difficulty) => {
    onNextClick(difficulty);
  };

  

  const DifficultySelectImg = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    animation: 'bgScroll 200s linear infinite',
  };

  // Estilos para el botón y la imagen dentro del botón
  const buttonStyle = {
    width: '30%', // Tamaño máximo del botón (30% del ancho de la pantalla)
    height: 'auto', // El alto se ajustará automáticamente
    borderRadius: '20px', // Bordes redondeados
    cursor: 'pointer',
    marginBottom: '10px', // Espacio entre botones
    background: '#FFCC01', // Color de fondo del botón
  };

  const imageStyle = {
    width: '100%', // Ajusta la imagen al 100% del tamaño del botón
    height: '100%',
    borderRadius: '20px', // Bordes redondeados para la imagen
  };

  return (
    <div className="difficulty-select" style={DifficultySelectImg}>
      <h2>Selecciona la dificultad:</h2>
      
      <button onClick={() => handleDifficultySelect('easy')} style={buttonStyle}>
        <img src="/Facil-23-09-2023.gif" alt="Facil" style={imageStyle} />
      </button>
      <button onClick={() => handleDifficultySelect('medium')} style={buttonStyle}>
        <img src="/Medio-23-09-2023.gif" alt="Medio" style={imageStyle} />
      </button>
      <button onClick={() => handleDifficultySelect('hard')} style={buttonStyle}>
        <img src="/Dificil-23-09-2023.gif" alt="Dificil" style={imageStyle} />
      </button>
    </div>
  );
};

export default DifficultySelect;
