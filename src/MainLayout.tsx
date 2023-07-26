import Header from './header/Header';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { useState } from 'react';
import { darkTheme, lightTheme } from './style/theme';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
