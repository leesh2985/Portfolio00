import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import JoinLonin from './component/body/right/loginfolder/JoinLonin';
// import MyLonin from './component/body/right/loginfolder/MyLonin';
import LoginPage from './component/body/right/loginfolder/LoginPage';
import Contest from './component/menu/Contest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lonin-page" element={<LoginPage />} />
        <Route path="/join-login" element={<JoinLonin />} />
        <Route path="/contest" element={<Contest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
