import { styled } from 'styled-components';
import Left from './left/Left';
import Right from './right/Right';
import Record from './left/Record';
import Tabs from './right/Tabs';

export default function Container() {
  return (
    <Body>
      <Left />
      <Record />
      <Right />
      <Tabs />
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
