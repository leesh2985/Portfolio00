import { styled } from 'styled-components';
import News from './left/News';
import Login from './right/Login';
import Record from './left/Record';
import Tabs from './right/Tabs';

export default function Container() {
  return (
    <Body>
      <News />
      <Login />
      <Record />
      <Tabs />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  position: relative;
  max-width: 1380px;
  height: 700px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 60px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
