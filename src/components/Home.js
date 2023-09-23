import React from 'react';
import backgroundImg from '../components/Home.jpg';

const homeStyle = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el fondo
  backgroundPosition: 'center', // Posición de la imagen en el centro
  height: '100vh', // Establece la altura al 100% de la ventana del navegador
  width: '100%', // Establece el ancho al 100% del contenedor
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white', // Cambia el color del texto para que sea legible
  animation: 'bgScroll 200s linear infinite', // Agregar la animación
};

const buttonStyle = {
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

const Home = ({ onStartClick }) => {
  return (
    <div className="home" style={homeStyle} >
      <h2>Bienvenido a PokéMemo</h2>
      <button onClick={onStartClick} style={buttonStyle}>
        {/* Aquí se inserta la imagen */}
        <img src="/Jugar-23-09-2023.gif" alt="Jugar" style={imageStyle} />
      </button>
    </div>
  );
};

export default Home;
