import React from 'react';

import { DropTargetMonitor, useDrop, DragObjectWithType } from 'react-dnd';

import useTeam from '../../context/TeamContext';
import { ItemTypes, Hero } from '../../utils/types';
import HeroTile from '../HeroTile';

import { Container } from './styles';

interface BoardTileProps {
  hero: Hero;
  index: number;
  isOver?: boolean;
}

interface DragType extends DragObjectWithType {
  hero: Hero;
  onBoard: boolean;
  position: number;
}

interface MonitorType extends DropTargetMonitor {
  targetId?: string;
}

const BoardTile: React.FC<BoardTileProps> = ({ hero, index }) => {
  const { addHero, swapPositions } = useTeam();

  const [{ isOver }, drop ] = useDrop({
    accept: ItemTypes.TILE,
    drop: (item: DragType, monitor: MonitorType) => {
      if (item.onBoard) {
        swapPositions(item.position, parseInt(monitor.targetId!.replace( /^\D+/g, '')));
      }
      else {
        addHero(item.hero, parseInt(monitor.targetId!.replace( /^\D+/g, '')));
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