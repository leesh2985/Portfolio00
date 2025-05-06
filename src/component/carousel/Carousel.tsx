import { Box } from '@chakra-ui/react';
import CarouselItem from './CarouselItem';

export default function Carousel() {
  const SliderItems = [
    { src: '/carouselImg/img1.jpg', title: 'post1' },
    { src: '/carouselImg/img2.jpg', title: 'post2' },
    { src: '/carouselImg/img3.jpg', title: 'post3' },
  ];

  return (
    <Box w="100%" h="24rem" mx="auto">
      <CarouselItem SliderItems={SliderItems} />
    </Box>
  );
}
