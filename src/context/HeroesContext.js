import React, { createContext, useCallback, useContext, useState } from 'react';

const initialState = ['asdasd', 'sadad'];

const HeroesContext = createContext();

const HeroesProvider = ({ children }) => {
  const [ state, ] = useState(initialState);

  const getHeroById = useCallback(id => {
    console.log(state);
  }, []);

  return (
    <HeroesContext.Provider value={{ state, getHeroById }}>
      { children }
    </HeroesContext.Provider>
  )
}

const useHeroes = () => {
  const context = useContext(HeroesContext);

  if (!context)
    throw new Error('useHeroes must be used within a HeroesProvider');

  return context;
}

export { HeroesProvider, useHeroes as default };