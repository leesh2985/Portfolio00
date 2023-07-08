import { styled } from 'styled-components';
import Left from './left/Left';
import Right from './right/Right';

export default function Container() {
  return (
    <Body>
      <Left />
      <Right />
    </Body>
  );
}

const Body = styled.div`
  position: relative;
  max-width: 1280px;
  height: 700px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 60px;
`;
