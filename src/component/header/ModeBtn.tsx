import { useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { LuSunMedium } from 'react-icons/lu';
import styled from 'styled-components';

interface ModeBtnProps {
  toggleTheme: () => void;
}

export default function ModeBtn({ toggleTheme }: ModeBtnProps) {
  const [theme, setTheme] = useState('light');

  const isLight = theme === 'light';

  const handleToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    toggleTheme(); // 호출된 toggleTheme 함수도 실행
  };

  return <Btn onClick={handleToggleTheme}>{isLight ? <BiMoon /> : <LuSunMedium />}</Btn>;
}

const Btn = styled.button`
  font-size: 20px;
  position: fixed;
  top: 30px;
  right: 30px;
`;
