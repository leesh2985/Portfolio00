import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bgColor: '#ffffff',
  textColor: '#242424',
  toggleBorder: '#FFF',
  BorderColor: '1px solid #242424',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme: DefaultTheme = {
  bgColor: '#060606',
  textColor: '#FFFFFF',
  toggleBorder: '#6B8096',
  borderColor: '1px solid #fff',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
