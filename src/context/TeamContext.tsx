import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Hero, TeamData } from '../utils/types';

const TeamContext = createContext<TeamData>({} as TeamData);

const TeamProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ team, setTeam ] = useState(Array(32).fill(''));

  const addHero = (hero: Hero, position: number | undefined) => {
    const curr = [ ...team ];

    if (curr.every(item => item)) return;

    if (position) {
      curr[position] = {
        hero: hero,
        position: position,
        items: [],
        level: 1
      };
    }
    else {
      curr.some((item, index) => {
        if (!item) {
          curr[index] = {
            hero: hero,
            position: index,
            items: [],
            level: 1
          };
    
          return true;
        }
        else {
          return false;
        }
      });
    }
    
    setTeam(curr);
  };

  const removeHero = (hero: Hero, position: number) => {
    const curr = [ ...team ];
    const pos = team.findIndex(item => item.position === position && item.hero.id === hero.id);
    
    curr[pos] = '';

    setTeam(curr);
  }

  const swapPositions = (initialPos: number, finalPos: number) => {
    if (initialPos === finalPos) return;
    
    const curr = [ ...team ];
    
    curr[initialPos].position = finalPos;

    if (curr[finalPos]) {
      curr[finalPos].position = initialPos;
    }
    
    [ curr[initialPos], curr[finalPos] ] = [ curr[finalPos], curr[initialPos] ];
    
    setTeam(curr);
  };

  const clearTeam = () => {
    setTeam(Array(32).fill(''));
  }

  const changeHeroLevel = (position: number, level: number) => {
    const curr = [ ...team ];
    const pos = team.findIndex(item => item.position === position);
    
    curr[pos] = {
      ...curr[pos],
      level
    }

    setTeam(curr);
  }

  return (
    <TeamContext.Provider value={{ team, addHero, removeHero, clearTeam, swapPositions, changeHeroLevel }}>
      { children }
    </TeamContext.Provider>
  )
}

const useTeam = () => {
  const context = useContext(TeamContext);

  if (!context)
    throw new Error('useTeam must be used within a TeamProvider');

  return context;
}

export { TeamProvider, useTeam as default };