import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Search from './Search';
// import ModeBtn from './ModeBtn';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface HeaderProps {
  // toggleTheme: () => void;
  theme: string;
}

interface NavItemLinkProps {
  $isActive: boolean;
}

export default function Header({ theme }: HeaderProps) {
  const [activeTab, setActiveTab] = useState('home');
  const tabsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // 클릭 이벤트 핸들러를 추가하여 탭 외부를 클릭하면 activeTab 상태를 초기화합니다.
    const handleOutsideClick = (event: MouseEvent) => {
      if (tabsRef.current && !tabsRef.current.contains(event.target as Node)) {
        setActiveTab('');
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <GnbContainer>
      <Gnb>
        <Logo to="/">
          <LogoImg src="/img/logo.png" alt="로고" />
        </Logo>
        <Nav ref={tabsRef}>
          <NavItem>
            <NavItemLink to="/" onClick={() => handleTabClick('home')} $isActive={activeTab === 'home'}>
              홈
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/contest" onClick={() => handleTabClick('contest')} $isActive={activeTab === 'contest'}>
              대회
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/" onClick={() => handleTabClick('daily')} $isActive={activeTab === 'daily'}>
              일상
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/" onClick={() => handleTabClick('record')} $isActive={activeTab === 'record'}>
              기록공유
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/" onClick={() => handleTabClick('tools')} $isActive={activeTab === 'tools'}>
              공구
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/" onClick={() => handleTabClick('event')} $isActive={activeTab === 'event'}>
              이벤트
            </NavItemLink>
          </NavItem>
        </Nav>
        <Search theme={theme} />
        <MyPageLink to="home/my-page">
          <BsPerson />
        </MyPageLink>
        {/* <ModeBtn toggleTheme={toggleTheme} /> */}
      </Gnb>
    </GnbContainer>
  );
}

const GnbContainer = styled.div`
  display: flex;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1380px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  cursor: pointer;

  &:hover {
    color: inherit;
  }
`;

const LogoImg = styled.img`
  width: 120px;
  padding-right: 20px;
  height: auto;
  margin-right: 40px;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 12px;
`;

const NavItemLink = styled(Link)<NavItemLinkProps>`
  cursor: pointer;
  display: block;
  position: relative;
  padding: 7px 10px;
  font-size: 17px;
  font-weight: bold;
  line-height: 24px;
  text-decoration: none;
  color: #242424;

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
    props.$isActive &&
    `
    color: #41b6e6;
    
    &::after {
      transform: scaleX(1);
    }
  `}
`;

const MyPageLink = styled(Link)`
  font-size: 25px;
  cursor: pointer;
  margin-right: 20px;
  color: #242424;
`;
