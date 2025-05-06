import { Container as ChakraContainer, Grid, GridItem, Stack, Box } from '@chakra-ui/react';
import Carousel from '../carousel/Carousel';
import Competition from './left/Competition';
import Login from './right/loginfolder/Login';
import Weather from './right/Weather';
import PopularPosts from './right/PopularPosts';

export default function MainSection() {
  return (
    <ChakraContainer maxW="container.xl" pt="30px" pb="60px">
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 12, md: 8 }}>
          <Grid gap={4}>
            <GridItem w="100%">
              <Carousel />
            </GridItem>
            <GridItem w="100%">
              <Competition />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <Stack spacing={4} w="100%">
            <Box w="100%">
              <Login />
            </Box>
            <Box w="100%">
              <Weather />
            </Box>
            <Box w="100%">
              <PopularPosts />
            </Box>
          </Stack>
        </GridItem>
      </Grid>
      {/* <Login />
        <Record />
        <Tabs /> */}
    </ChakraContainer>
  );
}
