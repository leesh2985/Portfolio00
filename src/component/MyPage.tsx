import { auth } from './body/right/loginfolder/FireBase';
import styled from 'styled-components';
import ImageUpload from './ImageUpload';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import LoginPage from './body/right/loginfolder/LoginPage';

export default function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<User | null>(null); // User 타입의 상태를 추가합니다.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      // User 타입을 명시적으로 지정합니다.
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user); // 사용자 정보를 저장합니다.
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // 로그인하지 않은 경우, 로그인 페이지를 보여줍니다.
  if (!isLoggedIn) {
    return <LoginPage />;
  }

  // 사용자 정보가 로드되지 않았을 경우, 로딩 화면을 표시하거나 다른 처리를 할 수 있습니다.
  if (!userObj) {
    return <div>Loading...</div>;
  }

  return (
    <MyContainer>
      <ProFile>
        <ImageUpload />
        <TextArea>
          <DisplayName>{userObj.displayName}님</DisplayName>
          <RunningRecord>평균기록 07.35</RunningRecord>
        </TextArea>
      </ProFile>
      <Marathon>
        <MarathonText>마라톤 참여</MarathonText>
        <ImgBox>
          <MarathonImg src="/post/post1.jpg" alt="기록"></MarathonImg>
          <MarathonImg src="/post/post2.jpg" alt="기록"></MarathonImg>
        </ImgBox>
      </Marathon>
    </MyContainer>
  );
}

const MyContainer = styled.div`
  margin: 0 auto;
  max-width: 1380px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ProFile = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1380px;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-left: 50px;
`;

const DisplayName = styled.span`
  font-size: 25px;
  font-weight: bold;
  justify-self: start;
`;

const RunningRecord = styled.span`
  font-size: 20px;
  justify-self: start;
`;

const Marathon = styled.div``;

const MarathonText = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 25px;
`;

const ImgBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

const MarathonImg = styled.img`
  width: 200px;
  height: auto;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;
