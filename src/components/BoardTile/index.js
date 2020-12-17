import React from 'react';

import { useDrop } from 'react-dnd';

import useTeam from '../../context/TeamContext';
import { ItemTypes } from '../../utils/types';
import HeroTile from '../HeroTile';

import { Container } from './styles';

const BoardTile = ({ hero, index }) => {
  const { addHero, swapPositions } = useTeam();

  const [{ isOver }, drop ] = useDrop({
    accept: ItemTypes.TILE,
    drop: (item, monitor) => {
      if (item.onBoard) {
        swapPositions(item.hero.id, parseInt(monitor.targetId.replace( /^\D+/g, '')));
      }
      else {
        addHero(item.hero, parseInt(monitor.targetId.replace( /^\D+/g, '')));
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    }),
  });

  return (
    <Container
      onContextMenu={e => e.preventDefault()}
      ref={drop}
      isOver={isOver}
      className='board-tile'
    >
      {
        hero && (
          <HeroTile 
            hero={hero} 
            onBoard={true}
            index={index}
          />
        )
      }
    </Container>
  );
}

export default BoardTile;