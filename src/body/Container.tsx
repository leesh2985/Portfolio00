import { styled } from 'styled-components';
import Left from './Left';
import Right from './Right';
import Middle from './Middle';

export default function Container() {
  return (
    <Body>
      <Left />
      <Right />
      <Middle />
    </Body>
  );
}

const Body = styled.div`
  position: relative;
  max-width: 1280px;
  height: 500px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 60px;
`;
