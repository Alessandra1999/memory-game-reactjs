import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

const images = [
  'img1.jfif',
  'img2.jfif',
  'img3.jfif',
  'img4.jfif',
  'img5.jfif',
  'img6.jfif',
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  const shuffleCards = () => {
    const cardImages = [...images, ...images]; // Duplicar as imagens para formar pares
    const shuffledImages = cardImages.sort(() => Math.random() - 0.5); // Embaralhar as cartas
    setCards(shuffledImages);
    setMatchedIndices([]);
    setFlippedIndices([]);
  };

  useEffect(() => {
    shuffleCards(); // Chamar a função de embaralhar quando o componente é montado
  }, []);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;

      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      }

      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices, cards]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedIndices.includes(index)) {
      setFlippedIndices((prev) => [...prev, index]);
    }
  };

  const handlePlayAgain = () => {
    shuffleCards(); // Reinicia o jogo ao clicar no botão "Jogar Novamente"
  };

  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${flippedIndices.includes(index) || matchedIndices.includes(index) ? 'flipped' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          {flippedIndices.includes(index) || matchedIndices.includes(index) ? (
            <img src={`${process.env.PUBLIC_URL}/images/${card}`} alt={`Card ${index}`} />
          ) : (
            <div className="card-back">?</div>
          )}
        </div>
      ))}
      {matchedIndices.length === cards.length && (
        <div className="winner">
          <h2>Você ganhou!</h2>
          <button onClick={handlePlayAgain}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
