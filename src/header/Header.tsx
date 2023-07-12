import { useState } from 'react';
import styled from 'styled-components';
import Search from './Search';
import ModeBtn from './ModeBtn';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

interface NavItemLinkProps {
  isActive: boolean;
}

export default function Header({ toggleTheme, theme }: HeaderProps) {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <Gnb>
      <Logo to="/home">
        <LogoImg src="/img/logo.png" alt="로고" />
      </Logo>
      <Nav>
        <NavItem>
          <NavItemLink onClick={() => handleTabClick('home')} isActive={activeTab === 'home'}>
            홈
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink onClick={() => handleTabClick('contest')} isActive={activeTab === 'contest'}>
            대회
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink onClick={() => handleTabClick('daily')} isActive={activeTab === 'daily'}>
            일상
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink onClick={() => handleTabClick('record')} isActive={activeTab === 'record'}>
            기록공유
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink onClick={() => handleTabClick('tools')} isActive={activeTab === 'tools'}>
            공구
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink onClick={() => handleTabClick('event')} isActive={activeTab === 'event'}>
            이벤트
          </NavItemLink>
        </NavItem>
      </Nav>
      <Search theme={theme} />
      <MyPageLink>
        <BsPerson />
      </MyPageLink>
      <ModeBtn toggleTheme={toggleTheme} />
    </Gnb>
  );
}

const Gnb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1380px;
  margin: 0 auto;
  height: 60px;
`;

const Logo = styled(Link)`
  cursor: pointer;
  width: 200px;

  &:hover {
    color: inherit;
  }
`;

const LogoImg = styled.img`
  width: 6.25rem;
  margin-right: 20px;
  height: auto;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 12px;
`;

const NavItemLink = styled.a<NavItemLinkProps>`
  cursor: pointer;
  display: block;
  position: relative;
  padding: 7px 10px;
  font-size: 17px;
  font-weight: bold;
  line-height: 24px;

  &:hover {
    color: #41b6e6;
    text-decoration: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #41b6e6;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  ${props =>
    props.isActive &&
    `
    color: #41b6e6;
    
    &::after {
      transform: scaleX(1);
    }
  `}
`;

const MyPageLink = styled.a`
  font-size: 25px;
  cursor: pointer;
`;
