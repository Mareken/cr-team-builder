import React, { useCallback, useEffect, useState } from 'react';

import { Search } from 'react-feather';
import { useDrop, DragObjectWithType } from 'react-dnd';
import useHeroes from '../../context/HeroesContext';
import useTeam from '../../context/TeamContext';
import useSearch from '../../context/SearchContext';
import { ItemTypes, Hero } from '../../utils/types';

import HeroTile from '../HeroTile';

import { Container, Header, LeftSide, OrderBtn, RightSide, SearchInput, Grid } from './styles';

interface DragType extends DragObjectWithType {
  hero: Hero;
  onBoard: boolean;
  position: number;
}

const HeroesGrid: React.FC = () => {
  const { heroes } = useHeroes();
  const { searchValue, setSearchValue } = useSearch();

  const [ sorting, setSorting ] = useState('cost');
  const [ filteredHeroes, setFilteredHeroes ] = useState(heroes);

  const { removeHero } = useTeam();

  const [ ,drop ] = useDrop({
    accept: ItemTypes.TILE,
    drop: (item: DragType) => {
      if (item.onBoard) removeHero(item.hero, item.position);
    },
    collect: monitor => ({
      isOver: monitor.isOver()
    }),
  });

  const compare = (a: Hero, b: Hero) => {
    if (a[sorting as keyof Hero] < b[sorting as keyof Hero]){
      return -1;
    }
    if (a[sorting as keyof Hero] > b[sorting as keyof Hero]){
      return 1;
    }
    return 0;
  }

  const formatBeforeCompare = (value: string) => {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    
    setSearchValue(value);
    handleFilterHeroes(value);
  }

  const handleFilterHeroes = useCallback((value: string = searchValue) => {
    const normalized = formatBeforeCompare(value);

    if (normalized.trim()) {
      if (isNaN(Number(normalized))) {
        const curr = heroes.filter(hero => {
          const [ firstClass, secondClass, thirdClass ] = hero.class;
          const [ firstRace, secondRace, thirdRace ] = hero.race;
          
          return (formatBeforeCompare(hero.name).includes(normalized) || (firstClass && formatBeforeCompare(firstClass).includes(normalized)) || (secondClass && formatBeforeCompare(secondClass).includes(normalized)) || (thirdClass && formatBeforeCompare(thirdClass).includes(normalized)) || (firstRace && formatBeforeCompare(firstRace).includes(normalized)) || (secondRace && formatBeforeCompare(secondRace).includes(normalized)) || (thirdRace && formatBeforeCompare(thirdRace).includes(normalized)));
        });
    
        setFilteredHeroes(curr);
      }
      else {
        setFilteredHeroes(heroes.filter(hero => hero.cost === Number(normalized)));
      }
    }
    else {
      setFilteredHeroes(heroes);
    }
  }, [heroes, searchValue]);

  const handleSelectSorting = (method: string) => {
    setSorting(method);
  }

  useEffect(() => {
    handleFilterHeroes();
  }, [searchValue, handleFilterHeroes]);

  return (
    <Container>
      <Header className='noSelect'>
        <LeftSide>
          <Search color='#fff' size={24} />
          <SearchInput
            placeholder='Pesquise por nome, preço ou sinergia'
            onChange={handleChange}
            value={searchValue}
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
          filteredHeroes.sort(compare).map((hero, index) => (
            <HeroTile
              key={hero.id}
              hero={hero}
              index={index}
            />
          ))
        }
      </Grid>
    </Container>
  );
}

export default HeroesGrid;