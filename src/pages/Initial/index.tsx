import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Board from '../../components/Board';
import HeroesGrid from '../../components/HeroesGrid';
import Traits from '../../components/Traits';
import Aside from '../../components/Aside';

import { Center, Main } from './styles';

const Initial: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
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

export default Initial;