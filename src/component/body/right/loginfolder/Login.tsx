import { Link } from 'react-router-dom';
import styled, { StyleSheetManager } from 'styled-components';

interface LoginSectionProps {
  darkMode: boolean;
}

export default function Login() {
  const isDarkMode = true;

  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'darkMode'}>
      <LoginSection darkMode={isDarkMode}>
        <LoginLink>로그인</LoginLink>
        <SocialLink>Goolgle로 시작하기</SocialLink>
        <LoginInfo>
          <IdLink>아이디 찾기</IdLink>
          <PwsLink>비밀번호 찾기</PwsLink>
          <JoinLink to="/join-login">회원가입하기</JoinLink>
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

const SocialLink = styled.a`
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
