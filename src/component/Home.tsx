import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/GlobalStyle';
import Header from '../header/Header';
import Carousel from './carousel/Carousel';
import Container from './body/Container';
import Footer from '../Footer';
import { darkTheme, lightTheme } from '../style/theme';

export default function Home() {
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
