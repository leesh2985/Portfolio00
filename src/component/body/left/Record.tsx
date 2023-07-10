import styled from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';

export default function Record() {
  return (
    <ShowContainer>
      <ShowText>
        <ShowTitle>기록 공유</ShowTitle>
        <ShowSpan>오늘 기록을 공유해 보세요!</ShowSpan>{' '}
        <PlusBtn>
          <CiCirclePlus />
        </PlusBtn>
      </ShowText>
      <ShowUl>
        <ShowPhoto>
          <Photo src="/record.jpg" alt="기록" />
        </ShowPhoto>
        <ShowPhoto>
          <Photo src="/record.jpg" alt="기록" />
        </ShowPhoto>
        <ShowPhoto>
          <Photo src="/record.jpg" alt="기록" />
        </ShowPhoto>
      </ShowUl>
    </ShowContainer>
  );
}

const ShowContainer = styled.section`
  display: flex;

  width: 700px;
  height: 400px;
  border: 1px solid #fff;
  background-color: #41b6e6;
  padding: 20px 25px 0px;
  border-radius: 5px;
  margin-top: 50px;
`;

const ShowText = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

const ShowTitle = styled.p`
  padding-top: 135px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

const ShowSpan = styled.p`
  padding-top: 25px;
  padding-right: 30px;
  font-size: 15px;
  color: #fff;
  text-align: left;
`;

const ShowUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShowPhoto = styled.li``;
const Photo = styled.img`
  cursor: pointer;
  width: 150px;
  border-radius: 10px;
`;

const PlusBtn = styled.a`
  cursor: pointer;
  padding-top: 15px;
  display: flex;
  font-size: 30px;
  color: #fff;
`;
