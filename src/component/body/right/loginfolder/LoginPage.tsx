import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

// interface LoginPageProps {}
export default function LoginPage() {
  return (
    <LoginPageContainer>
      <LogoArea>
        <Logo to="/home">
          <LogoImg src="/img/logo.png" alt="로고" />
        </Logo>
      </LogoArea>
      {/* {LoginPageProps.label && <LoginLabel>{LoginPageProps.label}</LoginLabel>} */}
      <LoginArea>
        <LoginInput type="email" placeholder="아이디" />
        <LoginInput type="password" placeholder="비밀번호" />
        <LoginButtonArea>
          <LoginButton>로그인</LoginButton>
          <JoinLink to="/join-login">회원가입하기</JoinLink>
        </LoginButtonArea>
      </LoginArea>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.div`
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
`;

const LogoImg = styled.img`
  width: 300px;
  margin-top: 50px;
  padding: 0px 0px 25px 0px;
`;

// const LoginLabel = styled.label`
//   font-weight: 500;
// `;

const LoginArea = styled.div`
  border: 1px solid #a9a9a9;
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
`;

const LoginInput = styled.input`
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
`;

const JoinLink = styled(Link)`
  cursor: pointer;
  font-size: 13px;
  color: #242424;
  font-weight: 700;
  margin-top: 15px;
`;
