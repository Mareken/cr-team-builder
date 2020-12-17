import React from 'react';

import useTeam from '../../context/TeamContext'; 
import BoardTile from '../BoardTile';

import { Container } from './styles';

const Board = () => {
  const { team } = useTeam();

  return (
    <Container>
      {
        team.map((item, i) => (
          <BoardTile
            key={i}
            hero={item.hero}
            index={i}
          />
        ))
      }
    </Container>
  );
}

export default Board;