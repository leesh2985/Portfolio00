import styled from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';

export default function Left() {
  return (
    <LeftSection>
      <Title>
        <LeftTitle>HDRC 소식</LeftTitle>
        <Newstabs>
          <Newstab>
            <NewsBtn>대회</NewsBtn>
          </Newstab>
          <Newstab>
            <NewsBtn>일상</NewsBtn>
          </Newstab>
          <Newstab>
            <NewsBtn>공구</NewsBtn>
          </Newstab>
          <Newstab>
            <NewsBtn>이벤트</NewsBtn>
          </Newstab>
          <PlusBtn>
            <CiCirclePlus />
          </PlusBtn>
        </Newstabs>
      </Title>
      <TextContent>
        <TextUl>
          <TextItem>
            <TextItemLink>
              <TextEm>대회</TextEm>
              <TextSpan>6월 28일(수) 임시점검 패치 안내</TextSpan>
              <TextTime>2023.06.28</TextTime>
            </TextItemLink>
          </TextItem>
          <TextItem>
            <TextItemLink>
              <TextEm>대회</TextEm>
              <TextSpan>6월 28일(수) 임시점검 패치 안내</TextSpan>
              <TextTime>2023.06.28</TextTime>
            </TextItemLink>
          </TextItem>
          <TextItem>
            <TextItemLink>
              <TextEm>대회</TextEm>
              <TextSpan>6월 28일(수) 임시점검 패치 안내</TextSpan>
              <TextTime>2023.06.28</TextTime>
            </TextItemLink>
          </TextItem>
        </TextUl>
      </TextContent>
    </LeftSection>
  );
}

const LeftSection = styled.section`
  width: 550px;
  height: 230px;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftTitle = styled.h3`
  display: inline-block;
  font-size: 2.1875rem;
  font-weight: bold;
`;

const Newstabs = styled.ul`
  display: flex;
  align-items: center;
`;

const Newstab = styled.li`
  margin-right: 12px;

  &:first-child {
    margin-left: 10px;
  }
`;

const NewsBtn = styled.button`
  cursor: pointer;
  display: block;
  padding: 5px 10px;
  font-size: 17px;
  font-weight: bold;
  line-height: 24px;
  color: #808080;
  text-decoration: none;
  display: flex;

  &:hover {
    color: #41b6e6;
    position: relative;
  }

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #41b6e6;
  }
`;

const PlusBtn = styled.button`
  display: flex;
  font-size: 30px;
  color: #808080;

  &:hover {
    color: #41b6e6;
  }
`;

// 정보
const TextContent = styled.div`
  display: flex;
  margin-top: 29px;
`;

const TextEm = styled.em`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  margin: auto 0;
  padding: 0 12px;
  border: 1px solid #00cc99;
  border-radius: 14px;
  height: 28px;
  color: #00cc99;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  -webkit-box-flex: 0;
`;

const TextSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 40px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
`;

const TextTime = styled.time`
  margin: auto 0;
  color: #a9a9a9;
  font-size: 13px;
  text-indent: 20px;
  line-height: 24px;
  margin-left: 60px;
`;

const TextUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const TextItem = styled.li`
  margin-bottom: 2px;
  line-height: 54px;
`;
const TextItemLink = styled.a`
  cursor: pointer;
  display: flex;

  &:hover {
    color: #41b6e6;
  }
`;
