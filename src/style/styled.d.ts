import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    toggleBorder: string;
    gradient: string;
  }
}
