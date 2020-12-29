import React, { useState } from 'react';

import { DragSourceMonitor, useDrag } from 'react-dnd';
import Icon from '@mdi/react';
import { mdiCrown } from '@mdi/js';
import useTeam from '../../context/TeamContext'; 
import ReactStars from 'react-rating-stars-component';

import { ItemTypes, Hero } from '../../utils/types';

import { Container, FeaturedBadge, Thumb, LevelContainer } from './styles';

interface HeroTileProps {
  hero: Hero;
  onBoard?: boolean;
  index: number;
}

const HeroTile: React.FC<HeroTileProps> = ({ hero, onBoard = false, index }) => {
  const { addHero, removeHero, changeHeroLevel } = useTeam();
  const [ level, setLevel ] = useState(1);
  const item = { hero, onBoard, type: ItemTypes.TILE, position: index };

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

  const levelChanged = (level: number) => {
    setLevel(level);
    changeHeroLevel(index, level);
  }

  return (
    <Container
      ref={drag}
      style={{ opacity }}
      cost={hero.cost}
      title={hero.name}
      aria-label={hero.name}
      board={onBoard}
      onClick={handleAddHero}
      onContextMenu={handleRemoveHero}
    >
      <Thumb bg={hero.thumb} isSvg={hero.thumb.includes('.svg')} />

      {
        onBoard && (
          <LevelContainer {...{ level }}>
            <ReactStars
              count={3}
              value={level}
              onChange={levelChanged}
              size={20}
              color='#a7bec9'
              activeColor='#DFB460'
              a11y={false}
            />
          </LevelContainer>
        )
      }

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