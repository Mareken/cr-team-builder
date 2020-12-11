import React, { createContext, useReducer } from 'react';
import HeroesReducer from '../Reducers/HeroesReducer';

const initialState = {
  heroes: [],
  error: null
}

const HeroesStore = ({ children }) => {
  const [ state, dispatch ] = useReducer(HeroesReducer, initialState);

  return (
    <Context.Provider value={[ state, dispatch ]}>
      { children }
    </Context.Provider>
  )
}

export const Context = createContext(initialState);
export default HeroesStore;