import { useEffect, useRef, useState } from 'react';
import JoditEditor, { Jodit } from 'jodit-react'; // Import Jodit type
import { styled } from 'styled-components';
import { User } from 'firebase/auth';
import { auth, dbService } from '../body/right/loginfolder/FireBase';
import { collection, addDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Writing() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const editor = useRef<Jodit>(null); // Specify the type as Jodit
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [userObj, setUserObj] = useState<User | null>(null); // User 타입의 상태를 추가합니다.
  const nextIdRef = useRef<number>(1);
  const navigate = useNavigate();

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

    // Firebase Firestore로부터 최대 id 값 가져오기
    const getMaxId = async () => {
      const q = query(collection(dbService, 'Record'), orderBy('id', 'desc'), limit(1));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const maxId = querySnapshot.docs[0].data().id;
        nextIdRef.current = maxId + 1;
      } else {
        nextIdRef.current = 1;
      }
    };

    getMaxId();

    return () => unsubscribe();
  }, []);

  // 로그인하지 않은 경우, 로그인 페이지를 보여줍니다.
  // if (!isLoggedIn) {
  //   window.alert('로그인이 필요합니다.'); // 로그인 안된 경우 알림 창 표시
  //   navigate('/');
  // }

  const handleCheckBtnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const currentDate = new Date(); // 현재 날짜와 시간 생성
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    try {
      await addDoc(collection(dbService, 'Record'), {
        id: nextIdRef.current,
        title,
        userId: userObj?.displayName,
        body: content,
        createdAt: formattedDate, // "년-월-일" 형식으로 저장
      });

      console.log('게시물 업로드 성공');
      nextIdRef.current += 1; // 다음 게시물을 위해 id 값을 1 증가시킴
      navigate('/record');
    } catch (error) {
      console.error('🔥 게시물 업로드 실패:', error);
      alert('게시물 업로드 중 오류가 발생했습니다.');
    }
  };

  return (
    <WritingContainer>
      {isLoggedIn ? (
        <>
          <InputDiv>
            <SelectInput>
              <option value="기록공유">기록공유</option>
              <option value="공구">공구</option>
            </SelectInput>
            <TitleInput
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
          </InputDiv>
          <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} />
          <CheckBtn type="submit" onClick={handleCheckBtnClick}>
            확인
          </CheckBtn>
        </>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </WritingContainer>
  );
}

const WritingContainer = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  margin-top: 50px;
`;

const InputDiv = styled.div`
  display: flex;
`;

const SelectInput = styled.select`
  font-size: 18px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const TitleInput = styled.input`
  width: 1355px;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 10px;
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
