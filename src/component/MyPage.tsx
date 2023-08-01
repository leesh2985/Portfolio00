import styled from 'styled-components';
import ImageUpload from './ImageUpload';

export default function MyPage() {
  return (
    <MyContainer>
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
