import React from 'react';

import { Team } from '../../utils/types';
import useTeam from '../../context/TeamContext'; 
import BoardTile from '../BoardTile';

import { Container } from './styles';

const Board: React.FC = () => {
  const { team } = useTeam();

  return (
    <Container>
      {
        team.comp.map((item: Team, index: number) => (
          <BoardTile
            key={index}
            hero={item.hero}
            index={index}
            level={item.level}
          />
        ))
      }
    </Container>
  );
}

export default Board;