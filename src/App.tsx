import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import JoinLonin from './component/body/right/loginfolder/JoinLonin';
import GoogleSignin from './component/body/right/loginfolder/GoogleSignin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/google-signin" element={<GoogleSignin />} />
        <Route path="/join-login" element={<JoinLonin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
