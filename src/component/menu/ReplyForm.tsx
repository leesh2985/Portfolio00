import React, { useState } from 'react';
import { styled } from 'styled-components';

interface ReplyFormProps {
  addList: (content: string) => void;
}

export default function ReplyForm(props: ReplyFormProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.addList(value); // addList 함수 호출
    setValue(''); // 입력 필드 초기화
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // value 상태를 사용하여 댓글을 등록하는 로직을 구현할 수 있습니다.
  //   console.log('댓글 등록:', value);
  // };

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
