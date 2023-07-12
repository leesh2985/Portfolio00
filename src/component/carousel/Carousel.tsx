import CarouselItem from './CarouselItem';
import styled from 'styled-components';

export default function Carousel() {
  const SliderItems = [
    { src: '/carouselImg/img1.jpg', title: 'post1' },
    { src: '/carouselImg/img2.jpg', title: 'post2' },
    { src: '/carouselImg/img3.jpg', title: 'post3' },
  ];
  return (
    <CarouselContainer>
      <CarouselItem SliderItems={SliderItems} />
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  max-width: 1920px;
  height: 560px;
  margin: 0 auto;
`;
