import { GoogleAuthProvider, User, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { auth } from './FireBase';
import { Link } from 'react-router-dom';

export default function MyLogin() {
  const [value, setValue] = useState<User | null>(null);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setValue(null); // 사용자 정보 초기화
        localStorage.clear();
        // console.log('로그아웃 성공');
      })
      .catch(error => {
        console.log('로그아웃 실패');
        console.log(error);
      });
  };

  useEffect(() => {
    const emailData = localStorage.getItem('email');
    if (emailData) {
      try {
        const userObj: User = JSON.parse(emailData);
        setValue(userObj);
      } catch (error) {
        console.error('JSON parsing error:', error);
        // JSON 파싱에 실패한 경우, 로컬 스토리지의 값을 삭제하거나 다른 처리를 수행할 수 있음
      }
    }
  }, []);

  const handleClick = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider)
      .then(data => {
        setValue(data.user);
        localStorage.setItem('email', JSON.stringify(data.user)); // JSON 형식으로 저장
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <NameArea>
      {value ? (
        <>
          {/* <Photo to="my-page"></Photo> */}
          <TextArea>
            <DisplayName>{value.displayName}님</DisplayName>
            <Logout onClick={handleLogout}>Logout</Logout>
            <RunningRecord>평균기록 07.35</RunningRecord>
          </TextArea>
          <Marathon>
            <MarathonText>마라톤 참여</MarathonText>
            <ImgBox>
              <MarathonImg src="/post/post1.jpg" alt="기록"></MarathonImg>
              <MarathonImg src="/post/post2.jpg" alt="기록"></MarathonImg>
            </ImgBox>
          </Marathon>
        </>
      ) : (
        <>
          <LoginLink to="/login-page">로그인</LoginLink>
          <SocialLink onClick={handleClick}>Google로 시작하기</SocialLink>
        </>
      )}{' '}
      {!value && (
        <LoginInfo>
          <IdLink>아이디 찾기</IdLink>
          <PwsLink>비밀번호 찾기</PwsLink>
          <JoinLink to="/join-login">회원가입하기</JoinLink>
        </LoginInfo>
      )}
    </NameArea>
  );
}

const NameArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 8px;
  row-gap: 15px;
  flex-direction: column;
  row-gap: 15px;
`;

const TextArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  row-gap: 10px;
`;

// const Photo = styled(Link)`
//   width: 80px;
//   height: 80px;
//   background-color: #d3d3d3;
//   border-radius: 100%;
// `;

const DisplayName = styled.span`
  font-size: 20px;
  font-weight: bold;
  justify-self: start;
`;

const Logout = styled.button`
  cursor: pointer;
  font-size: 10px;
  color: #808080;
  border: none;
  border: 1px solid #808080;
  border-radius: 30px;
  padding: 8px;
  justify-self: end;
`;

const RunningRecord = styled.span`
  font-size: 15px;
  justify-self: start;
`;

const Marathon = styled.div``;
const ImgBox = styled.div`
  display: flex;
  margin-top: 5px;
`;
const MarathonText = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
`;
const MarathonImg = styled.img`
  width: 70px;
  height: auto;
  margin-right: 8px;
  &:last-child {
    margin-right: 0px;
  }
`;
const LoginLink = styled(Link)`
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
  text-decoration: none;

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
