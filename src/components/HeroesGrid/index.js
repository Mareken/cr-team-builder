import React, { useState } from 'react';

import { Search } from 'react-feather';
import { useDrop } from 'react-dnd';
import useHeroes from '../../context/HeroesContext';
import useTeam from '../../context/TeamContext';
import { ItemTypes } from '../../utils/types';

import HeroTile from '../HeroTile';

import { Container, Header, LeftSide, OrderBtn, RightSide, SearchInput, Grid } from './styles';

const HeroesGrid = () => {
  const [ search, setSearch ] = useState('');
  const [ sorting, setSorting ] = useState('cost');
  const { heroes } = useHeroes();

  const { removeHero } = useTeam();

  const [{ isOver }, drop ] = useDrop({
    accept: ItemTypes.TILE,
    drop: (item) => {
      if (item.onBoard) removeHero(item.hero);
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    }),
  });

  const compare = (a, b) => {
    if (a[sorting] < b[sorting]){
      return -1;
    }
    if (a[sorting] > b[sorting]){
      return 1;
    }
    return 0;
  }

  const handleChange = evt => {
    setSearch(evt.target.value);
  }

  const handleSelectSorting = method => {
    setSorting(method);
  }

  return (
    <Container>
      <Header className='noSelect'>
        <LeftSide>
          <Search color='#fff' size={24} />
          <SearchInput
            placeholder='Pesquise por nome, preço ou sinergia'
            onChange={handleChange}
            value={search}
            type='text'
          />
        </LeftSide>
        <RightSide>
          <OrderBtn
            onClick={() => handleSelectSorting('cost')}
            selected={sorting === 'cost'}
          >
            Preço
          </OrderBtn>
          <OrderBtn
            onClick={() => handleSelectSorting('name')}
            selected={sorting === 'name'}
          >
            A-Z
          </OrderBtn>
        </RightSide>
      </Header>

      <Grid
        ref={drop}
      >
        {
          heroes.sort(compare).map(hero => (
            <HeroTile
              key={hero.id}
              hero={hero}
            />
          ))
        }
      </Grid>
    </Container>
  );
}

export default HeroesGrid;