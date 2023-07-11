import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>
        <LogoImg src="/img/footerlogo.png" alt="로고" />
      </FooterLogo>
      <InfoTab>
        <InfoItems>이메일 문의</InfoItems>
        <InfoItems>개인정보취급방침</InfoItems>
        <InfoItems>사업자정보확인</InfoItems>
        <InfoItems>권리 침해</InfoItems>
        <InfoItems>광고/제휴</InfoItems>
      </InfoTab>
      <MiniText>
        <MiniInfo>©HDRC</MiniInfo>
        <MiniInfo>사업자등록번호 : 1997-12-13</MiniInfo>
        <MiniInfo>TEL : 01029858223</MiniInfo>
        <MiniInfo>대표 : 이승현</MiniInfo>
      </MiniText>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  background-color: #f5f6f7;
  height: 180px;
`;
const FooterLogo = styled.div`
  padding-top: 40px;
  max-width: 1380px;
  margin: 0 auto;
  cursor: pointer;
`;
const LogoImg = styled.img`
  width: 150px;
  height: auto;
`;

const InfoTab = styled.ul`
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
`;

const InfoItems = styled.li`
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #a9a9a9;
    margin: 4px 12px 0;
  }

  &:first-child::before {
    display: none;
  }
`;

const MiniText = styled.ul`
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
`;

const MiniInfo = styled.li`
  font-size: 12px;
  font-weight: bold;
  color: #808080;

  &::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #a9a9a9;
    margin: 4px 12px 0;
  }

  &:first-child::before {
    display: none;
  }
`;
