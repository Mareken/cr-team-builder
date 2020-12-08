import React from 'react';

import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/types';

import { Container } from './styles';

function BoardTile ({ index }) {
  const [{ isOver }, drop ] = useDrop({
    accept: ItemTypes.TILE,
    drop: (item, monitor) => ({
      
    }),
    collect: monitor => ({
      isOver: monitor.isOver()
    }),
  });

  return (
    <Container
      onContextMenu={e => e.preventDefault()}
      ref={drop}
      isOver={isOver}
      index={index}
    >

    </Container>
  );
}

export default BoardTile;