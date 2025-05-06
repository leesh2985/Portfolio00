import React from 'react';

import Container from './body/Container';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <React.Fragment>
      <ChakraProvider>
        <Container />
      </ChakraProvider>
    </React.Fragment>
  );
}
