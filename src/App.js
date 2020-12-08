import React from 'react';

import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Header from './components/Header';
import Board from './components/Board';
import HeroesGrid from './components/HeroesGrid';
import Traits from './components/Traits';
import Aside from './components/Aside';

const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0 140px;
`;

const Center = styled.div`
  margin: 0 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App () {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Main>
        <Traits />
        <Center>
          <Board />
          <HeroesGrid />
        </Center>
        <Aside />
      </Main>
    </DndProvider>
  );
}

export default App;
