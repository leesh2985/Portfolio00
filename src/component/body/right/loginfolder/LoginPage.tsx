import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface LoginPageProps {}
export default function LoginPage(LoginPageProps) {
  return (
    <LoginPageContainer>
      <LogoArea>
        <Logo to="/home">
          <LogoImg src="/img/logo.png" alt="로고" />
        </Logo>
      </LogoArea>
      {LoginPageProps.label && <label>{LoginPageProps.label}</label>}
      <LoginInput type="text" {...LoginPageProps} />
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
  gap: 8px;
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

const LoginInput = styled.input`
  min-width: 400px;
  height: fit-content;
  width: fit-content;
  background-color: #fff;
  margin: 0 auto;
  // box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  border-radius: 5px;
  border: 1px solid #808080;
  outline: none;
`;
