import React, { useEffect } from 'react';

import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/types';
import HeroTile from '../HeroTile';

import { Container } from './styles';

const BoardTile = ({ hero, index }) => {
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
      className='board-tile'
    >
      { hero && <HeroTile hero={hero} onBoard={true} /> }
    </Container>
  );
}

export default BoardTile;