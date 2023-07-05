import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
  bgColor: string;
  textColor: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
    /* * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body,html{
      font-size:16px;
    } */
    body {
        background: ${({ theme }) => theme.bgColor};
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
        color: ${({ theme }) => theme.textColor};
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.bgColor};
    }
`;

export default GlobalStyle;
