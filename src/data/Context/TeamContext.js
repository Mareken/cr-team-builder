import React, { createContext, useReducer } from 'react';
import TeamReducer from '../Reducers/TeamReducer';

const initialState = {
  team: [],
  error: null
}

const TeamStore = ({ children }) => {
  const [ state, dispatch ] = useReducer(TeamReducer, initialState);

  return (
    <Context.Provider value={[ state, dispatch ]}>
      { children }
    </Context.Provider>
  )
}

export const Context = createContext(initialState);
export default TeamStore;