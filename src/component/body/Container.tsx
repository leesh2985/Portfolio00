import { styled } from 'styled-components';
import Left from './left/Left';
import Right from './right/Right';
import Record from './left/Record';
import Tabs from './right/Tabs';

export default function Container() {
  return (
    <Body>
      <Left />
      <Right />
      <Record />
      <Tabs />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  position: relative;
  max-width: 1280px;
  height: 700px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 60px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
