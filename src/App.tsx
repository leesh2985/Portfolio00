import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import JoinLonin from './component/body/right/loginfolder/JoinLonin';
import MyLonin from './component/body/right/loginfolder/MyLonin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/my-lonin" element={<MyLonin />} />
        <Route path="/join-login" element={<JoinLonin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
