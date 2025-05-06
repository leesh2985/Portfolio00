import { Container as ChakraContainer, Grid, GridItem } from '@chakra-ui/react';
import Carousel from '../carousel/Carousel';
import Competition from './left/Competition';
import Login from './right/loginfolder/Login';
import Record from './left/Record';
import Tabs from './right/Tabs';

export default function MainSection() {
  return (
    <ChakraContainer maxW="container.xl" pt="50px" pb="60px">
      <Grid templateColumns="7fr 3fr" gap={6}>
        <GridItem>
          <Grid gap={4}>
            <GridItem>
              <Carousel />
            </GridItem>
            <GridItem>
              <Competition />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Login />
        </GridItem>
      </Grid>
      {/* <Login />
        <Record />
        <Tabs /> */}
    </ChakraContainer>
  );
}
