import { useEffect, useState } from 'react';
// import { styled } from 'styled-components';
import ReplyList from './ReplyList';
import ReplyForm from './ReplyForm';
import { auth } from '../body/right/loginfolder/FireBase';
import { User } from 'firebase/auth';

interface ReplyListProps {
  list: { userid: string; content: string; date: string }[];
}

export default function Reply() {
  const [list, setList] = useState([
    { userid: 'user1', content: '댓글 내용1', date: '2023-08-10' },
    { userid: 'user2', content: '댓글 내용2', date: '2023-08-11' },
    // ... 더 많은 댓글 데이터 추가
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<User | null>(null); // User 타입의 상태를 추가합니다.

  const addList = (content: string) => {
    const newItem = { userid: userObj?.displayName || 'Guest', content, date: getCurrentDate() };
    setList([...list, newItem]);
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
      // User 타입을 명시적으로 지정합니다.
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user); // 사용자 정보를 저장합니다.
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ul className="comment">
      <ReplyForm addList={addList} />
      <ReplyList list={list} />
    </ul>
  );
}
