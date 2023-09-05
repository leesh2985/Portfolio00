import { useEffect, useState } from 'react';
import ReplyList from './ReplyList';
import ReplyForm from './ReplyForm';
import { auth, dbService } from '../body/right/loginfolder/FireBase';
import { User } from 'firebase/auth';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

interface Comment {
  id: string; // id 속성 추가
  userid: string;
  content: string;
  date: string;
}

interface ReplyListProps {
  list: Comment[];
  updateList: (updatedList: Comment[]) => void;
  user: string;
}

export default function Reply() {
  // const [list, setList] = useState([
  //   { userid: 'user1', content: '댓글 내용1', date: '2023-08-10' },
  //   { userid: 'user2', content: '댓글 내용2', date: '2023-08-11' },
  //   // ... 더 많은 댓글 데이터 추가
  // ]);
  const [list, setList] = useState<Comment[]>([]);
  const [, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<User | null>(null);

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

  useEffect(() => {
    const commentsCollection = collection(dbService, 'comments');

    const unsubscribe = onSnapshot(commentsCollection, snapshot => {
      const updatedList = snapshot.docs.map(doc => doc.data() as Comment);
      setList(updatedList);
    });

    return () => unsubscribe();
  }, []);

  const addList = async (content: string) => {
    const newItem: Comment = {
      userid: userObj?.displayName || 'Guest',
      content,
      date: getCurrentDate(),
      id: '',
    };
    const commentsCollection = collection(dbService, 'comments');
    await addDoc(commentsCollection, newItem);
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
