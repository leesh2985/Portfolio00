import { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { styled } from 'styled-components';
import { User } from 'firebase/auth';
import { auth } from '../body/right/loginfolder/FireBase';
import LoginPage from '../body/right/loginfolder/LoginPage';

export default function Writing() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      // User 타입을 명시적으로 지정합니다.
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // 로그인하지 않은 경우, 로그인 페이지를 보여줍니다.
  if (!isLoggedIn) {
    return <LoginPage />;
  }

  const handleCheckBtnClick = () => {
    const currentContent = editor.current?.value; // 현재 에디터의 내용 가져오기
    console.log('추가된 내용:', currentContent);
    // 이후 추가된 내용을 서버에 저장하거나 다른 처리를 수행할 수 있습니다.
  };

  return (
    <WritingContainer>
      <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} />;
      <CheckBtn onClick={handleCheckBtnClick}>확인</CheckBtn>
    </WritingContainer>
  );
}

const WritingContainer = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  margin-top: 50px;
`;
const CheckBtn = styled.button`
  background-color: #1e8ec7;
  border: 1px solid #1e8ec7;
  font-size: 15px;
  border-radius: 20px;
  padding: 10px 15px;
  color: #fff;
  margin: 20px 0;
  cursor: pointer;
`;
