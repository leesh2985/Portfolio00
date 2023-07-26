import { useMemo, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { styled } from 'styled-components';

export default function Writing() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  return (
    <WritingContainer>
      <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} />

      <CheckBtn>확인</CheckBtn>
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
`;
