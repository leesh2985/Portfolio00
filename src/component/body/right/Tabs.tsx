import { useState } from 'react';
import styled from 'styled-components';

interface Menu {
  name: string;
}

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState<number | undefined>(1);

  const tabsArr: Menu[] = [{ name: '인기글' }, { name: '공지사항' }];

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <TabsContainer>
      <TabMenus>
        {tabsArr.map((tab, index) => (
          <TabMenu key={index} onClick={() => handleTabClick(index)} className={index === currentTab ? 'active' : ''}>
            {tab.name}
          </TabMenu>
        ))}
      </TabMenus>
      <Content>
        <TextUl>
          {currentTab === 0 && (
            <>
              <TextItem>
                <TextItemLink>
                  <TextEm>1</TextEm>
                  <TextSpan>6월 28일(수) 임시점검 패치 안내</TextSpan>
                  <TextTime>2023.06.28</TextTime>
                </TextItemLink>
              </TextItem>
              <TextItem>
                <TextItemLink>
                  <TextEm>2</TextEm>
                  <TextSpan>6월 28일(수) 임시점검 패치 안내</TextSpan>
                  <TextTime>2023.06.28</TextTime>
                </TextItemLink>
              </TextItem>
              <TextItem>
                <TextItemLink>
                  <TextEm>3</TextEm>
                  <TextSpan>6월 28일(수) 임시점검 패치 안내</TextSpan>
                  <TextTime>2023.06.28</TextTime>
                </TextItemLink>
              </TextItem>
              <TextItem>
                <TextItemLink>
                  <TextEm>4</TextEm>
                  <TextSpan>6월 28일(수) 임시점검 패치 안내</TextSpan>
                  <TextTime>2023.06.28</TextTime>
                </TextItemLink>
              </TextItem>
              <TextItem>
                <TextItemLink>
                  <TextEm>5</TextEm>
                  <TextSpan>6월 28일(수) 임시점검 패치 안내</TextSpan>
                  <TextTime>2023.06.28</TextTime>
                </TextItemLink>
              </TextItem>
            </>
          )}
        </TextUl>
        <TextUl>
          {currentTab === 1 && (
            <TextItem>
              <TextItemLink>
                <TextSpan>7월 1일(금) 정기점검 안내</TextSpan>
                <TextTime>2023.07.01</TextTime>
              </TextItemLink>
            </TextItem>
          )}
        </TextUl>
      </Content>
    </TabsContainer>
  );
}

const TabsContainer = styled.section`
  margin-top: 50px;
  width: 477px;
`;

const TabMenus = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TabMenu = styled.div`
  cursor: pointer;
  padding: 15px;
  flex: 1;
  background-color: #d3d3d3;
  border: none;
  outline: none;
  text-align: center;
  color: #555;
  font-weight: bold;
  position: relative;

  &.active {
    background-color: #2891c7;
    color: #fff;
  }

  &:first-child {
    border-radius: 5px 0 0 0;
  }

  &:last-child {
    border-radius: 0 5px 0 0;
  }
`;

const Content = styled.div`
  border: 1px solid #d3d3d3;
  padding: 20px;
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
  margin-left: 30px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 300;
`;

const TextTime = styled.time`
  margin: auto 0;
  color: #a9a9a9;
  font-size: 13px;
  text-indent: 20px;
  line-height: 24px;
`;

const TextUl = styled.ul`
  display: flex;
  flex-direction: column;
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
