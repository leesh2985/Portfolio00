import React from 'react';
import Carousel from './carousel/Carousel';
import Container from './body/Container';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <React.Fragment>
      <ChakraProvider>
        {/* <Carousel /> */}
        <Container />
      </ChakraProvider>
    </React.Fragment>
  );
}
