import React, { useState } from 'react';
import backgroundImg from '../components/Name.jpg';

const backgroundStyle = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', // Ajusta el alto al 100% de la pantalla
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  animation: 'bgScroll 200s linear infinite', 
  color: 'white',// Agregar la animación
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

const NameInput = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '') {
      onNameSubmit(name);
    }
  };

  return (
    <div className="name-input" style={backgroundStyle}>
      <h2>Ingresa tu nombre:</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column', // Mostrar elementos en una columna
          alignItems: 'center', // Centrar horizontalmente
          gap: '10px', // Espacio entre elementos
        }}
      >
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit" style={buttonStyle}>
          <img
            src="/Continuar-23-09-2023.gif"
            alt="Continuar"
            style={imageStyle}
          />
        </button>
      </form>
    </div>
  );
};

export default NameInput;
