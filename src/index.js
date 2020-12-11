import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import TraitsStore from './data/Context/TraitsContext';
import TeamStore from './data/Context/TeamContext';
import HeroesStore from './data/Context/HeroesContext';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <TraitsStore>
      <HeroesStore>
        <TeamStore>
          <App />
        </TeamStore>
      </HeroesStore>
    </TraitsStore>
  </React.StrictMode>,
  document.getElementById('root')
);
