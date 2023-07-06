import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

interface CarouselItemProps {
  SliderItems: { src: string; title: string }[];
}

export default function CarouselItem({ SliderItems }: CarouselItemProps) {
  const timerRef = useRef<number | undefined>(undefined);
  const [slider, setSlider] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = slider === 0;
    const newIndex = isFirstSlide ? SliderItems.length - 1 : slider - 1;
    setSlider(newIndex);
  };

  const goToNext = useCallback(() => {
    const isFirstSlide = slider === SliderItems.length - 1;
    const newIndex = isFirstSlide ? 0 : slider + 1;
    setSlider(newIndex);
  }, [slider, SliderItems]);

  const goToSlide = (SliderItemIndex: number) => {
    setSlider(SliderItemIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [goToNext]);

  return (
    <CarouselItemContainer>
      <LeftArrow onClick={goToPrevious}>
        <MdOutlineArrowBackIosNew />
      </LeftArrow>
      <RightArrow onClick={goToNext}>
        <MdOutlineArrowForwardIos />
      </RightArrow>
      <CarouselImg imageurl={SliderItems[slider].src}></CarouselImg>
      <DotsContainer>
        {SliderItems.map((SliderItem, SliderItemIndex) => (
          <Dot key={SliderItemIndex} onClick={() => goToSlide(SliderItemIndex)} active={SliderItemIndex === slider}>
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

const CarouselImg = styled.div<{ imageurl: string }>`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.imageurl});
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
  /* 캐러셀안에 dot넣기 */
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
`;

const Dot = styled.div<{ active: boolean }>`
  margin: 0 3px;
  cursor: pointer;
  font-size: 15px;
  color: ${props => (props.active ? 'rgba(0, 0, 0, 1)' : 'rgba(136, 136, 136, 0.5)')};
`;
