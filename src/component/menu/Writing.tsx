import { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { styled } from 'styled-components';

export default function Writing() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const isLoggedIn = true; // 여기서 true는 로그인 상태를 의미합니다.

  // 로그인이 되어 있지 않으면 빈 div를 반환하는 함수
  const renderEditorOrPlaceholder = () => {
    if (isLoggedIn) {
      return <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} />;
    } else {
      window.alert('로그인 부탁드립니다.'); // 알림창 띄우기
      window.history.back(); // 이전 화면으로 돌아가기
    }
  };

  const handleCheckBtnClick = () => {
    const currentContent = editor.current?.value; // 현재 에디터의 내용 가져오기
    console.log('추가된 내용:', currentContent);
    // 이후 추가된 내용을 서버에 저장하거나 다른 처리를 수행할 수 있습니다.
  };

  return (
    <WritingContainer>
      {renderEditorOrPlaceholder()}
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
