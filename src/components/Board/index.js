import React from 'react';

import BoardTile from '../BoardTile';

import { Container } from './styles';

function Board () {
  return (
    <Container>
      {
        Array.from(Array(32).keys()).map((_, i) => (
          <BoardTile
            key={i}
            index={i}
          />
        ))
      }
    </Container>
  );
}

export default Board;