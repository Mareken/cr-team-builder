import React, { createContext, PropsWithChildren, useContext } from 'react';

import usePersistedState from '../utils/hooks/usePersistedState';
import localTheme from '../styles/theme';

const ThemeContext = createContext({} as any);

const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [ theme, setTheme ] = usePersistedState('cr-theme', localTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useTheme must be used within a ThemeProvider');

  const { theme, setTheme } = context;
  return { theme, setTheme };
}

export { ThemeProvider, useTheme as default };