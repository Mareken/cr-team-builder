import React, { useState } from 'react';

import { Search } from 'react-feather';
import { useDrop, DragObjectWithType } from 'react-dnd';
import useHeroes from '../../context/HeroesContext';
import useTeam from '../../context/TeamContext';
import { ItemTypes, Hero } from '../../utils/types';

import HeroTile from '../HeroTile';

import { Container, Header, LeftSide, OrderBtn, RightSide, SearchInput, Grid } from './styles';

interface HeroesGridProps {
  isOver?: boolean;
}

interface DragType extends DragObjectWithType {
  hero: Hero;
  onBoard: boolean;
  position: number;
}

const HeroesGrid: React.FC<HeroesGridProps> = () => {
  const { heroes } = useHeroes();

  const [ search, setSearch ] = useState('');
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
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    
    setSearch(value);

    if (value.trim()) {
      if (isNaN(Number(value))) {
        const curr = heroes.filter(hero => {
          const [ firstClass, secondClass, thirdClass ] = hero.class;
          const [ firstRace, secondRace, thirdRace ] = hero.race;
          
          return (formatBeforeCompare(hero.name).includes(value) || (firstClass && formatBeforeCompare(firstClass).includes(value)) || (secondClass && formatBeforeCompare(secondClass).includes(value)) || (thirdClass && formatBeforeCompare(thirdClass).includes(value)) || (firstRace && formatBeforeCompare(firstRace).includes(value)) || (secondRace && formatBeforeCompare(secondRace).includes(value)) || (thirdRace && formatBeforeCompare(thirdRace).includes(value)));
        });
    
        setFilteredHeroes(curr);
      }
      else {
        setFilteredHeroes(heroes.filter(hero => hero.cost === Number(value)));
      }
    }
    else {
      setFilteredHeroes(heroes);
    }
  }

  const handleSelectSorting = (method: string) => {
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