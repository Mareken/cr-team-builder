import React, { createContext, useContext, useState } from 'react';

const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [ team, setTeam ] = useState(Array(32).fill(''));

  const addHero = (hero, position) => {
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

  const removeHero = (hero, index) => {
    const curr = [ ...team ];
    const pos = team.filter(item => item && item.hero.id === hero.id && item.position === index)[0].position;

    curr[pos] = '';

    setTeam(curr);
  }

  const swapPositions = (id, finalPos) => {
    const curr = [ ...team ];
    const initialPos = curr.filter(item => item && item.hero.id === id)[0].position;
    
    [ curr[initialPos], curr[finalPos] ] = [ curr[finalPos], curr[initialPos] ];
    
    setTeam(curr);
  };

  const clearTeam = () => {
    setTeam(Array(32).fill(''));
  }

  return (
    <TeamContext.Provider value={{ team, addHero, removeHero, clearTeam, swapPositions }}>
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