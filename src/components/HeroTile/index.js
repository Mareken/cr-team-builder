import React from 'react';

import { ItemTypes } from '../../utils/types';
import { useDrag } from 'react-dnd';

import { Container } from './styles';

function HeroTile ({ id }) {
  const item = { id, type: ItemTypes.TILE };

  const [{ opacity }, drag] = useDrag({
    item,
    collect: (monitor) => ({
      opacity: !!monitor.isDragging() ? 0.4 : 1
    }),
  })

  return (
    <Container
      ref={drag}
      style={{ opacity }}
    >

    </Container>
  );
}

export default HeroTile;