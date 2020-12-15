import React from 'react';

import { useDrag } from 'react-dnd';
import Icon from '@mdi/react';
import { mdiCrown } from '@mdi/js';
import useTeam from '../../context/TeamContext'; 

import { ItemTypes } from '../../utils/types';

import { Container, FeaturedBadge, Thumb } from './styles';

const HeroTile = ({ hero, onBoard = false }) => {
  const { addHero, removeHero } = useTeam();
  const item = { hero, type: ItemTypes.TILE };

  const [{ opacity }, drag] = useDrag({
    item,
    collect: (monitor) => ({
      opacity: !!monitor.isDragging() ? 0.4 : 1
    }),
  })

  console.log(hero);

  const handleAddHero = evt => {
    if (onBoard) return;

    addHero(hero);
  }
  
  const handleRemoveHero = () => {
    if (onBoard) {
      removeHero(hero);
    }
  }

  return (
    <Container
      ref={drag}
      style={{ opacity }}
      cost={hero.cost}
      title={hero.name}
      aria-label={hero.name}
      onClick={handleAddHero}
      onContextMenu={handleRemoveHero}
    >
      <Thumb bg={hero.thumb} isSvg={hero.thumb.includes('.svg')} />

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