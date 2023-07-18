import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default function JoinLonin() {
  return (
    <>
      <LogoArea>
        <Logo to="/home">
          <LogoImg src="/img/logo.png" alt="로고" />
        </Logo>
      </LogoArea>

      <Form>
        <NameInput type="text" name="text" placeholder="이름(실명)" />
        <HbdInput type="date" name="date" placeholder="생년월일 8자리" />
        <IdInput type="email" name="email" placeholder="아이디" />
        <PWInput type="password" name="password" placeholder="비밀번호" />
        <PWInputCheck type="password" name="password" placeholder="비밀번호확인" />
      </Form>
      <Join>
        <JoinHdrc>가입하기</JoinHdrc>
      </Join>
    </>
  );
}

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
  padding: 0px 115px 25px 0px;
`;

const buttonStyles = css`
  cursor: pointer;
  width: 100%;
  height: 50px;
  padding: 10px 0;
  border: 1px solid;
  display: block;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
`;

const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;
`;

const inputStyles = css`
  width: 100%;
  height: 30px;
  padding: 10px 15px;
  border: 1px solid;
  display: block;
  color: #000000;
  font-size: 18px;
  border-radius: 4px;
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #d3d3d3;

  &:focus {
    border-color: #808080;
  }
`;

const NameInput = styled.input`
  ${inputStyles}
  margin-top: 50px;
`;

const HbdInput = styled.input`
  ${inputStyles}
`;

const IdInput = styled.input`
  ${inputStyles}
  margin-top: 70px;

  &::placeholder {
    content: '@';
  }
`;

const PWInput = styled.input`
  ${inputStyles}
`;

const PWInputCheck = styled.input`
  ${inputStyles}
`;

const Join = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const JoinHdrc = styled.button`
  ${buttonStyles}
  margin-top: 100px;
  background-color: #1e8ec7;
  border-color: #1e8ec7;
`;
