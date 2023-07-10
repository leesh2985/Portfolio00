import { useState } from 'react';
import styled from 'styled-components';

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState<number | undefined>(1);

  const tabs = [
    {
      id: 1,
      tabTitle: '인기글',
      title: '런린이 새벽런 32회차',
    },
    {
      id: 2,
      tabTitle: '공지사항',
      title: '지역별 러닝코스',
    },
  ];

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(Number(e.currentTarget.id));
  };

  return (
    <TabsContainer>
      <TabMenu>
        {tabs.map(tab => (
          <TabMenuBtn key={tab.id} id={tab.id.toString()} disabled={currentTab === tab.id} onClick={handleTabClick}>
            {tab.tabTitle}
          </TabMenuBtn>
        ))}
      </TabMenu>
      <Content>
        {tabs.map(tab => (
          <div key={tab.id}>
            {currentTab === tab.id && (
              <>
                <p>
                  <TabLink>{tab.title}</TabLink>
                </p>
              </>
            )}
          </div>
        ))}
      </Content>
    </TabsContainer>
  );
}

const TabsContainer = styled.section`
  margin-top: 50px;
  width: 435px;
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TabMenuBtn = styled.button`
  cursor: pointer;
  padding: 15px;
  flex: 1;
  background-color: #d3d3d3;
  border: none;
  outline: none;

  &:disabled {
    background-color: #2891c7;
    color: #fff;
  }
`;

const Content = styled.div`
  border: 1px solid #d3d3d3;
  padding: 20px;
`;

const TabLink = styled.a`
  cursor: pointer;

  &:hover {
    color: #2891c7;
  }
`;
