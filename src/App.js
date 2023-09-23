import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import NameInput from './components/NameInput';
import DifficultySelect from './components/DifficultySelect';
import Board from './components/Board';

function App() {
  const [screen, setScreen] = useState('home'); // Puede ser 'home', 'nameInput', 'difficultySelect' o 'board'
  const [playerName, setPlayerName] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleStartClick = () => {
    setScreen('nameInput');
  };

  const handleNameSubmit = (name) => {
    setPlayerName(name);
    setScreen('difficultySelect');
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setScreen('board');
  };

  let content;

  if (screen === 'home') {
    content = <Home onStartClick={handleStartClick} />;
  } else if (screen === 'nameInput') {
    content = <NameInput onNameSubmit={handleNameSubmit} />;
  } else if (screen === 'difficultySelect') {
    content = <DifficultySelect onNextClick={handleDifficultySelect} />;
  } else if (screen === 'board') {
    content = <Board playerName={playerName} difficulty={selectedDifficulty} />;
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
