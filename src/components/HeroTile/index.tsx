import React from 'react';

import { DragSourceMonitor, useDrag } from 'react-dnd';
import Icon from '@mdi/react';
import { mdiCrown } from '@mdi/js';
import useTeam from '../../context/TeamContext'; 

import { ItemTypes, Hero } from '../../utils/types';
import mana from '../../assets/images/mana.svg';

import { Container, FeaturedBadge, Thumb, HeroTooltip, Row, TooltipThumb, TooltipName, TooltipTrait, TooltipCost, TooltipCostIcon, TooltipCostText } from './styles';

interface HeroTileProps {
  hero: Hero;
  onBoard?: boolean;
  index: number;
  level?: number;
}

const HeroTile: React.FC<HeroTileProps> = ({ hero, onBoard = false, index, level = 1 }) => {
  const { addHero, removeHero } = useTeam();
  const item = { hero, onBoard, type: ItemTypes.TILE, position: index, level };

  const [{ opacity }, drag] = useDrag({
    item,
    collect: (monitor: DragSourceMonitor) => ({
      opacity: !!monitor.isDragging() ? 0.4 : 1
    }),
  })

  const handleAddHero = () => {
    if (onBoard) return;

    addHero(hero);
  }
  
  const handleRemoveHero = () => {
    if (onBoard) {
      removeHero(hero, index);
    }
  }

  return (
    <Container
      cost={hero.cost}
      aria-label={hero.name}
      board={onBoard}
      onClick={handleAddHero}
      onContextMenu={handleRemoveHero}
    >
      <Thumb bg={hero.thumb} ref={drag} style={{ opacity }} />

      <HeroTooltip>
        <Row>
          <TooltipThumb bg={hero.thumb} />
          <TooltipName cost={hero.cost}>{hero.name}</TooltipName>
          <TooltipCost>
            <TooltipCostIcon bg={mana} />
            <TooltipCostText>{hero.cost}</TooltipCostText>
          </TooltipCost>
        </Row>
        <Row>
          {
            hero.class.map((item, index) => (
              <TooltipTrait key={index}>{item}</TooltipTrait>
            ))
          }
          {
            hero.race.map((item, index) => (
              <TooltipTrait key={index}>{item}</TooltipTrait>
            ))
          }
        </Row>
      </HeroTooltip>

      {
        hero.featured && (
          <FeaturedBadge cost={hero.cost}>
            <Icon
              path={mdiCrown}
              color={hero.cost === 1 ? '#DFB460' : '#fff'}
              size='16px'
            />
          </FeaturedBadge>
        )
      }
    </Container>
  );
}

export default HeroTile;