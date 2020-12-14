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
  display: flex;
  align-items: flex-start;

  @media screen and (min-width: 360px) {
    padding: 0 40px; 
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    max-width: 930px;
    padding: 0 140px;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 360px) {
    margin: 0 32px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 64px;
  }
`;

const App = () => {
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
