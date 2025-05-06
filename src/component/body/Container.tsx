import { Container as ChakraContainer, Flex } from '@chakra-ui/react';
import News from './left/News';
import Login from './right/loginfolder/Login';
import Record from './left/Record';
import Tabs from './right/Tabs';

export default function MainSection() {
  return (
    <ChakraContainer maxW="container.xl" pt="50px" pb="60px">
      <Flex position="relative" height="700px" flexWrap="wrap" justifyContent="space-between">
        <News />
        <Login />
        <Record />
        <Tabs />
      </Flex>
    </ChakraContainer>
  );
}
