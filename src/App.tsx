import React, { useState } from 'react';
import './App.css';
import Carousel from './component/carousel/Carousel';
import Header from './component/header/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { darkTheme, lightTheme } from './style/theme';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Carousel />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
