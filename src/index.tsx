import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { TraitsProvider } from './context/TraitsContext';
import { TeamProvider } from './context/TeamContext';
import { HeroesProvider } from './context/HeroesContext';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <TraitsProvider>
          <SearchProvider>
            <HeroesProvider>
              <TeamProvider>
                <App />
              </TeamProvider>
            </HeroesProvider>
          </SearchProvider>
        </TraitsProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
