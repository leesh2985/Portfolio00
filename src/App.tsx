import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import JoinLonin from './component/body/right/loginfolder/JoinLonin';
import MyPage from './component/MyPage';
import MainLayout from './MainLayout';
import Writing from './component/menu/Writing';
import Contest from './component/menu/contest/Contest';
import Record from './component/menu/record/Record';
import Daily from './component/menu/daily/Daily';
import Tools from './component/menu/tools/Tools';
import Events from './component/menu/event/Events';
import ContestPostDetail from './component/menu/contest/ContestPostDetail';
import DailyPostDetail from './component/menu/daily/DailyPostDetail';
import RecordPostDetail from './component/menu/record/RecordPostDetail';
import ToolsPostDetail from './component/menu/tools/ContestPostDetail';
import EventsPostDetail from './component/menu/event/EventsPostDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Header,Footer 보여주고 싶은 컴포넌트 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/record" element={<Record />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/events" element={<Events />} />
          <Route path="home/my-page" element={<MyPage />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contestpostdetail/:postId" element={<ContestPostDetail />} />
          <Route path="/dailypostdetail/:postId" element={<DailyPostDetail />} />
          <Route path="/recordpostdetail/:postId" element={<RecordPostDetail />} />
          <Route path="/toolspostdetail/:postId" element={<ToolsPostDetail />} />
          <Route path="/eventspostdetail/:postId" element={<EventsPostDetail />} />
        </Route>
        {/* Header,Footer을 안 보여주고 싶은 컴포넌트 */}
        <Route path="/join-login" element={<JoinLonin />} />
      </Routes>
    </BrowserRouter>
  );
}
