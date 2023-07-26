import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import JoinLonin from './component/body/right/loginfolder/JoinLonin';
// import MyLogin from './component/body/right/loginfolder/MyLogin';
import LoginPage from './component/body/right/loginfolder/LoginPage';
// import Contest from './component/menu/Contest';

import MainPage from './component/menu/MainPage';
import MyPage from './component/MyPage';
import MainLayout from './MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Header,Footer 보여주고 싶은 컴포넌트 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contest" element={<MainPage />} />
          <Route path="home/my-page" element={<MyPage />} />
        </Route>
        {/* Header,Footer을 안 보여주고 싶은 컴포넌트 */}
        <Route path="/lonin-page" element={<LoginPage />} />
        <Route path="/join-login" element={<JoinLonin />} />
      </Routes>
    </BrowserRouter>
  );
}
