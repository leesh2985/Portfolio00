import styled from 'styled-components';

export default function Right() {
  return (
    <RightSection>
      <LoginBtn>
        <LoginLink>로그인</LoginLink>
      </LoginBtn>
      <SocialBox>
        <SocialText>간편하게 로그인 하기</SocialText>
      </SocialBox>
    </RightSection>
  );
}

const RightSection = styled.section`
  float: right;
  width: 530px;
  height: 260px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
`;

const LoginBtn = styled.button`
  width: 80%;
  height: 50px;
  background: #41b6e6;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const LoginLink = styled.a`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const SocialBox = styled.div`
  width: 80%;
  height: 50px;
  background: #d3d3d3;
  border-radius: 5px;
  margin: 0 auto;
`;

const SocialText = styled.p`
  color: #808080;
  display: flex;
  align-items: center;
  height: 100%;
`;
