import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { TraitsProvider } from './context/TraitsContext';
import { TeamProvider } from './context/TeamContext';
import { HeroesProvider } from './context/HeroesContext';
import { SearchProvider } from './context/SearchContext';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <TraitsProvider>
      <SearchProvider>
        <HeroesProvider>
          <TeamProvider>
            <App />
          </TeamProvider>
        </HeroesProvider>
      </SearchProvider>
    </TraitsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
