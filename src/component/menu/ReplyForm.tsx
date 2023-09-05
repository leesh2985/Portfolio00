import { auth } from '../body/right/loginfolder/FireBase';
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface ReplyFormProps {
  addList: (content: string) => void;
}

export default function ReplyForm(props: ReplyFormProps) {
  const [value, setValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setUserObj] = useState<User | null>(null); // User 타입의 상태를 추가합니다.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoggedIn) {
      props.addList(value); // addList 함수 호출
      setValue(''); // 입력 필드 초기화
    } else {
      window.alert('댓글을 등록하려면 로그인이 필요합니다.');
    }
  };

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
    <CommentForm>
      <InputForm onSubmit={handleSubmit}>
        <PsBox>
          <Int type="text" placeholder="댓글 입력" onChange={handleChange} />
        </PsBox>
        <Btn type="submit" value="등록" />
      </InputForm>
    </CommentForm>
  );
}

const CommentForm = styled.li`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid #0077b3;
`;
const InputForm = styled.form`
  display: flex;
`;
const PsBox = styled.span``;
const Int = styled.input`
  width: 1250px;
  padding: 10px;
  border: 1px solid #cdcdcd;
`;
const Btn = styled.input`
  width: 130px;
  border: 1px solid #1e8ec7;
  background-color: #1e8ec7;
  color: #fff;
  font-weight: bold;

  &:hover {
    border: 1px solid #41b6e6;
    background-color: #41b6e6;
  }
`;
