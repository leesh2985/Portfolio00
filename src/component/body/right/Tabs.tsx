import { useState } from 'react';
import styled from 'styled-components';

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState<number | undefined>(1);

  const tabs = [
    {
      id: 1,
      tabTitle: 'Tab 1',
      title: 'Title 1',
      content: 'a',
    },
    {
      id: 2,
      tabTitle: 'Tab 2',
      title: 'Title 2',
      content: 'b',
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
                <p>{tab.title}</p>
                <p>{tab.content}</p>
              </>
            )}
          </div>
        ))}
      </Content>
    </TabsContainer>
  );
}

const TabsContainer = styled.section`
  width: 435px;
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  padding: 10px;
`;

const TabMenuBtn = styled.button`
  cursor: pointer;
  padding: 15px;
  flex: 1;

  border: none;
  outline: none;

  &:disabled {
    background-color: #000;
    color: #fff;
  }
`;

const Content = styled.div`
  border: 1px solid #f1f1f1;
  padding: 20px;
`;
