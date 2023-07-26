import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from './FireBase';

export default function JoinLonin() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    // date: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const [erroerMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.name || !values.email || !values.password || !values.passwordConfirm) {
      setErrorMsg('모든 항목을 입력해주세요.');
      return;
    }
    setErrorMsg('');

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async res => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate('/');
        console.log('가입 성공:', user);
      })
      .catch(err => {
        setSubmitButtonDisabled(false);
        setErrorMsg('오류가 발생했습니다: ' + err.message);
      });
  };

  return (
    <JoinLoninContainer>
      <LogoArea>
        <Logo to="/">
          <LogoImg src="/img/logo.png" alt="로고" />
        </Logo>
      </LogoArea>
      <form onSubmit={handleSubmission}>
        <JoinLoninArea>
          <JoinLoninInput type="name" name="name" placeholder="이름(실명)" onChange={handleChange} />
          {/* <JoinLoninInput type="date" name="date" placeholder="생년월일 8자리" /> */}
          <JoinLoninInput type="email" name="email" placeholder="아이디" onChange={handleChange} />
          <JoinLoninInput type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
          <JoinLoninInput type="password" name="passwordConfirm" placeholder="비밀번호확인" onChange={handleChange} />
          <LoginButtonArea>
            <Error>{erroerMsg}</Error>
            <LoginButton type="submit" disabled={submitButtonDisabled}>
              가입하기
            </LoginButton>
          </LoginButtonArea>
        </JoinLoninArea>
      </form>
    </JoinLoninContainer>
  );
}

const JoinLoninContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1380px;
  margin: 0 auto;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;
  height: auto;
`;

const Logo = styled(Link)`
  cursor: pointer;
  width: 300px;
`;

const LogoImg = styled.img`
  width: 200px;
  margin-top: 50px;
`;

const JoinLoninArea = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;

  &:nth-child(2) {
  }
`;

const JoinLoninInput = styled.input`
  min-width: 480px;
  height: fit-content;
  width: fit-content;
  background-color: #fff;
  margin: 0 auto;
  padding: 20px 15px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #d3d3d3;
  outline: none;

  &:focus {
    border-color: #808080;
  }
`;

const LoginButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Error = styled.b`
  font-weight: bold;
  font-size: 14px;
  color: red;
  margin-bottom: 30px;
`;

const LoginButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: #1e8ec7;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding: 20px 15px;
  min-width: 512px;
  border-radius: 4px;
  border: 1px solid #1e8ec7;
  transition: 100ms;

  &:hover {
    background-color: #41b6e6;
    border: 1px solid #41b6e6;
  }

  &:disabled {
    background-color: gray !important;
    border: 1px solid gray !important;
  }
`;

// const JoinLink = styled(Link)`
//   cursor: pointer;
//   font-size: 13px;
//   color: #242424;
//   font-weight: 700;
//   margin-top: 15px;
// `;
