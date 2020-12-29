import React, { useEffect } from 'react';

import { Team } from '../../utils/types';
import useTeam from '../../context/TeamContext'; 
import BoardTile from '../BoardTile';

import { Container } from './styles';

const Board: React.FC = () => {
  const { team } = useTeam();

  useEffect(() => {
    console.log(team);
  }, [team]);

  return (
    <Container>
      {
        team.map((item: Team, i: number) => (
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