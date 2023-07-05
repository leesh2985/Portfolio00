import { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

interface CarouselItemProps {
  SliderItems: { src: string; title: string }[];
}

export default function CarouselItem({ SliderItems }: CarouselItemProps) {
  const [slider, setSlider] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = slider === 0;
    const newIndex = isFirstSlide ? SliderItems.length - 1 : slider - 1;
    setSlider(newIndex);
  };

  const goToNext = () => {
    const isFirstSlide = slider === 0;
    const newIndex = isFirstSlide ? 0 : slider + 1;
    setSlider(newIndex);
  };

  const goToSlide = (SliderItemIndex: number) => {
    setSlider(SliderItemIndex);
  };

  return (
    <CarouselItemContainer>
      <LeftArrow onClick={goToPrevious}>
        <MdOutlineArrowBackIosNew />
      </LeftArrow>
      <RightArrow onClick={goToNext}>
        <MdOutlineArrowForwardIos />
      </RightArrow>
      <CarouselImg imageUrl={SliderItems[slider].src}></CarouselImg>
      <DotsContainer>
        {SliderItems.map((SliderItem, SliderItemIndex) => (
          <Dot key={SliderItemIndex} onClick={() => goToSlide(SliderItemIndex)}>
            ●
          </Dot>
        ))}
      </DotsContainer>
    </CarouselItemContainer>
  );
}

const CarouselItemContainer = styled.div`
  height: 100%;
  position: relative;
`;

const CarouselImg = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
`;

// 화살표
const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 15px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 15px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

// 점
const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  margin: 0 3px;
  cursor: pointer;
  font-size: 20px;
`;
