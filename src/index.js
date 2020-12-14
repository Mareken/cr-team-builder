import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { TraitsProvider } from './context/TraitsContext';
import { TeamProvider } from './context/TeamContext';
import { HeroesProvider } from './context/HeroesContext';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <TraitsProvider>
      <HeroesProvider>
        <TeamProvider>
          <App />
        </TeamProvider>
      </HeroesProvider>
    </TraitsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
