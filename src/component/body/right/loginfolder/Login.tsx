import { useEffect, useState } from 'react';
import { auth } from './FireBase';
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import styled, { StyleSheetManager } from 'styled-components';
// import Home from '../../../Home';

interface LoginSectionProps {
  darkMode: boolean;
}

export default function Login() {
  const [value, setValue] = useState<User | null>(null);
  const handleClick = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then(data => {
        setValue(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch(err => {
        console.log(err);
      });
  };

  const isDarkMode = true;

  // useEffect(() => {
  //   setValue(JSON.parse(localStorage.getItem('email') || 'null'));
  // }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload;
  };

  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'darkMode'}>
      <LoginSection darkMode={isDarkMode}>
        <LoginLink>로그인</LoginLink>
        <SocialLink onClick={handleClick}>Goolgle로 시작하기</SocialLink>
        {value ? value.displayName : null}
        <LoginInfo>
          <IdLink>아이디 찾기</IdLink>
          <PwsLink>비밀번호 찾기</PwsLink>
          <JoinLink to="/join-login">회원가입하기</JoinLink>
          <Logout onClick={logout}>Logout</Logout>
        </LoginInfo>
      </LoginSection>
    </StyleSheetManager>
  );
}

const LoginSection = styled.section<LoginSectionProps>`
  width: 435px;
  height: 190px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 21px 20px 18px;
  line-height: 20px;
  text-align: center;
  background-color: #fff;
`;

const LoginLink = styled.a`
  cursor: pointer;
  margin: 0 auto;
  width: 80%;
  margin-top: 13px;
  padding: 17px 0;
  border: 1px solid;
  display: block;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  background-color: #41b6e6;

  &:hover {
    text-decoration: none;
  }
`;

const SocialLink = styled.button`
  cursor: pointer;
  margin: 0 auto;
  width: 80%;
  margin-top: 13px;
  padding: 17px 0;
  border: 1px solid;
  display: block;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  background-color: #a9a9a9;
`;

const LoginInfo = styled.div`
  margin-top: 16px;
  font-size: 1.3rem;
  margin-bottom: 13px;
`;

const IdLink = styled.a`
  cursor: pointer;
  font-size: 13px;
`;

const PwsLink = styled.a`
  cursor: pointer;
  font-size: 13px;

  &::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #a9a9a9;
    margin: 4px 12px 0;
  }
`;

const JoinLink = styled(Link)`
  cursor: pointer;
  font-size: 13px;
  color: #242424;
  text-decoration: none;

  &::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #a9a9a9;
    margin: 4px 12px 0;
  }
`;

const Logout = styled.button`
  cursor: pointer;
  font-size: 13px;

  &::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #a9a9a9;
    margin: 4px 12px 0;
  }
`;
