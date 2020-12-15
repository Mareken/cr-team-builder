import React, { useEffect, useState } from 'react';

import useHeroes from '../../context/HeroesContext';
import { Search } from 'react-feather';
import HeroTile from '../HeroTile';

import { Container, Header, LeftSide, OrderBtn, RightSide, SearchInput, Grid } from './styles';

const HeroesGrid = () => {
  const [ search, setSearch ] = useState('');
  const [ sorting, setSorting ] = useState('cost');
  const { state } = useHeroes();

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

      <Grid>
        {
          state.sort(compare).map(hero => (
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