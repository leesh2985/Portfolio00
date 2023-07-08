import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { darkTheme, lightTheme } from './style/theme';
import Carousel from './component/carousel/Carousel';
import Header from './component/header/Header';
import Container from './component/body/Container';
import Footer from './Footer';

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
        <Container />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
