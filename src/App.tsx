import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import JoinLonin from './component/body/right/loginfolder/JoinLonin';
// import MyLonin from './component/body/right/loginfolder/MyLonin';
import LoginPage from './component/body/right/loginfolder/LoginPage';
import Contest from './component/menu/Contest';
import Header from './header/Header';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { useState } from 'react';
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
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lonin-page" element={<LoginPage />} />
          <Route path="/join-login" element={<JoinLonin />} />
          <Route path="/contest" element={<Contest />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
