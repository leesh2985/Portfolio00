import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function JoinLonin() {
  return (
    <JoinLoninContainer>
      <LogoArea>
        <Logo to="/home">
          <LogoImg src="/img/logo.png" alt="로고" />
        </Logo>
      </LogoArea>
      <JoinLoninArea>
        <JoinLoninInput type="text" name="text" placeholder="이름(실명)" />
        <JoinLoninInput type="date" name="date" placeholder="생년월일 8자리" />
        <JoinLoninInput type="email" name="email" placeholder="아이디" />
        <JoinLoninInput type="password" name="password" placeholder="비밀번호" />
        <JoinLoninInput type="password" name="password" placeholder="비밀번호확인" />
        <LoginButtonArea>
          <LoginButton>가입하기</LoginButton>
          <JoinLink to="/lonin-page">회원가입하기</JoinLink>
        </LoginButtonArea>
      </JoinLoninArea>
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

const LoginButton = styled.button`
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

// const Form = styled.form`
//   max-width: 700px;
//   margin: 0 auto;
// `;

// const inputStyles = css`
//   width: 100%;
//   height: 30px;
//   padding: 10px 15px;
//   border: 1px solid;
//   display: block;
//   color: #000000;
//   font-size: 18px;
//   border-radius: 4px;
//   margin-top: 5px;
//   background-color: #fff;
//   border: 1px solid #d3d3d3;

//   &:focus {
//     border-color: #808080;
//   }
// `;

// const NameInput = styled.input`
//   ${inputStyles}
//   margin-top: 50px;
// `;

// const HbdInput = styled.input`
//   ${inputStyles}
// `;

// const IdInput = styled.input`
//   ${inputStyles}
//   margin-top: 70px;

//   &::placeholder {
//     content: '@';
//   }
// `;

// const PWInput = styled.input`
//   ${inputStyles}
// `;

// const PWInputCheck = styled.input`
//   ${inputStyles}
// `;

// const Join = styled.div`
//   display: flex;

//   margin: 0 auto;
//   max-width: 732px;
// `;

// const JoinHdrc = styled.button`
//   ${buttonStyles}
//   margin-top: 100px;
//   background-color: #1e8ec7;
//   border: 1px solid #1e8ec7;
//   transition: 100ms;

//   &:hover {
//     background-color: #41b6e6;
//     border: 1px solid #41b6e6;
//   }
// `;
