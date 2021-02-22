import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import useTheme from './context/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes />
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App;
