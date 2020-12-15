import React, { createContext, useContext, useState } from 'react';

const initialState = {
  team: {
    id: '',
    heroes: Array(32).fill(''),
    traits: {}
  },
  error: null
}

const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [ state, setState ] = useState(initialState);

  const addHero = hero => {
    const curr = { ...state };
    
    curr.team.heroes.some((item, index) => {
      if (!item) {
        curr.team.heroes[index] = hero;
  
        return true;
      }
      else {
        return false;
      }
    });

    if (curr.team.traits[hero.class]) {
      curr.team.traits[hero.class] += 1;
    }
    else {
      curr.team.traits[hero.class] = 1;
    }

    if (curr.team.traits[hero.race]) {
      curr.team.traits[hero.race] += 1;
    }
    else {
      curr.team.traits[hero.race] = 1;
    }

    setState(curr);
  }

  const removeHero = (hero) => {
    setState({
      ...state,
      team: {
        ...state.team,
        heroes: state.team.heroes.map(item => item.id === hero.id ? '' : item),
        //traits: state.team.traits.map(trait => trait.name === hero.name ? { trait: trait -= 1 } : trait)
      }
    })
  }

  const clearTeam = () => {
    setState({
      ...state,
      team: {
        id: '',
        heroes: Array.from(Array(32)),
        traits: {}
      }
    })
  }

  return (
    <TeamContext.Provider value={{ state, addHero, removeHero, clearTeam }}>
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