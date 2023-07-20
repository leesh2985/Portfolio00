import React from 'react';
import Carousel from './carousel/Carousel';
import Container from './body/Container';

export default function Home() {
  return (
    <React.Fragment>
      <Carousel />
      <Container />
    </React.Fragment>
  );
}
