import React from 'react';
import MemoryGame from './components/MemoryGame';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 800;
  color: #3F9E31;
  margin-bottom: 50px;
`;

function App() {
  return (
    <div>
      <Title>Jogo da Memória - Hunter x Hunter</Title>
      <MemoryGame />
    </div>
  );
}

export default App;
