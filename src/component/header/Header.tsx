import styled from 'styled-components';
import Search from './Search';

export default function Header() {
  return (
    <Gnb>
      <Logo>
        <LogoImg src="/img/logo.png" alt="로고" />
      </Logo>
      <Nav>
        <NavItem>
          <NavItemLink>홈</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink>대회</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink>일상</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink>기록공유</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink>공구</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink>이벤트</NavItemLink>
        </NavItem>
      </Nav>
      <Search />
    </Gnb>
  );
}

const Gnb = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  height: 60px;
`;

const Logo = styled.a`
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

const NavItemLink = styled.a`
  cursor: pointer;
  display: block;
  position: relative;
  padding: 7px 10px;
  font-size: 17px;
  font-weight: bold;
  line-height: 24px;

  &:hover {
    color: inherit;
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

  &:hover::after {
    transform: scaleX(1);
  }
`;
