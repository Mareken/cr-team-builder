import React from 'react';

import useTeam from '../../context/TeamContext'; 
import BoardTile from '../BoardTile';

import { Container } from './styles';

const Board = () => {
  const { state } = useTeam();

  return (
    <Container>
      {
        state.team.heroes.map((hero, i) => (
          <BoardTile
            key={i}
            index={i}
            hero={hero}
          />
        ))
      }
    </Container>
  );
}

export default Board;