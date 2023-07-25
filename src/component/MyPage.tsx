import styled from 'styled-components';
import ImageUpload from './ImageUpload';
import Home from './Home';

interface MyPageProps {
  isLoggedIn: boolean;
}

export default function MyPage({ isLoggedIn }: MyPageProps) {
  if (!isLoggedIn) {
    alert('로그인이 필요합니다.');
    // 로그인되지 않았을 때에도 화면을 유지하기 위해, 아무것도 렌더링하지 않는 빈 컨테이너를 반환합니다.
    return <Home />;
  }

  return (
    <MyContainer>
      {
        isLoggedIn ? (
          <>
            <ProFile>
              <ImageUpload />
              <TextArea>
                <DisplayName>님</DisplayName>
                <RunningRecord>평균기록 07.35</RunningRecord>
              </TextArea>
            </ProFile>
            <Marathon>
              <MarathonText>마라톤 참여</MarathonText>
              <ImgBox>
                <MarathonImg src="/post/post1.jpg" alt="기록" />
                <MarathonImg src="/post/post2.jpg" alt="기록" />
              </ImgBox>
            </Marathon>
            <EditBtn>개인정보 수정</EditBtn>
          </>
        ) : null /* 로그인되지 않았을 때 나머지 컴포넌트는 렌더링하지 않습니다. */
      }
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

const EditBtn = styled.button`
  font-weight: 600;
  font-size: 18px;
  padding: 5px 20px;
  cursor: pointer;
  color: #fff;
  border-radius: 15px;
  border: 1px solid #41b6e6;
  background-color: #41b6e6;
  margin-top: 30px;
`;
