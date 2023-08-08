import { useEffect, useState } from 'react';
import ReplyList from './ReplyList';
import ReplyForm from './ReplyForm';
import { auth } from '../body/right/loginfolder/FireBase';
import { User } from 'firebase/auth';

interface ReplyListProps {
  list: { userid: string; content: string; date: string }[];
  updateList: (updatedList: { userid: string; content: string; date: string }[]) => void;
}

export default function Reply() {
  const [list, setList] = useState([
    { userid: 'user1', content: '댓글 내용1', date: '2023-08-10' },
    { userid: 'user2', content: '댓글 내용2', date: '2023-08-11' },
    // ... 더 많은 댓글 데이터 추가
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<User | null>(null);

  const addList = (content: string) => {
    const newItem = { userid: userObj?.displayName || 'Guest', content, date: getCurrentDate() };
    setList(prevList => [...prevList, newItem]);
  };

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const updateList = (updatedList: ReplyListProps['list']) => {
    setList(updatedList);
  };

  return (
    <ul className="comment">
      <ReplyForm addList={addList} />
      <ReplyList list={list} updateList={updateList} user={userObj?.displayName || 'Guest'} />
    </ul>
  );
}
