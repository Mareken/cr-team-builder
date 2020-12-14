import React, { createContext, useContext, useState } from 'react';

const initialState = {
  team: {
    id: '',
    heroes: [],
    traits: []
  },
  error: null
}

const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [ state, ] = useState(initialState);

  return (
    <TeamContext.Provider value={{ state }}>
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