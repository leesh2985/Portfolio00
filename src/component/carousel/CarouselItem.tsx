import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

interface CarouselItemProps {
  SliderItems: { src: string; title: string }[];
}

export default function CarouselItem({ SliderItems }: CarouselItemProps) {
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [slider, setSlider] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = slider === 0;
    const newIndex = isFirstSlide ? SliderItems.length - 1 : slider - 1;
    setSlider(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = slider === SliderItems.length - 1;
    const newIndex = isLastSlide ? 0 : slider + 1;
    setSlider(newIndex);
  }, [slider, SliderItems]);

  const goToSlide = (index: number) => setSlider(index);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      goToNext();
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext]);

  return (
    <Box position="relative" w="100%" h="100%" overflow="hidden">
      {/* 좌측 화살표 */}
      <Box
        position="absolute"
        top="50%"
        left="32px"
        transform="translateY(-50%)"
        zIndex={1}
        cursor="pointer"
        color="white"
        fontSize="lg"
        onClick={goToPrevious}>
        <Icon as={MdOutlineArrowBackIosNew} />
      </Box>

      {/* 우측 화살표 */}
      <Box
        position="absolute"
        top="50%"
        right="32px"
        transform="translateY(-50%)"
        zIndex={1}
        cursor="pointer"
        color="white"
        fontSize="lg"
        onClick={goToNext}>
        <Icon as={MdOutlineArrowForwardIos} />
      </Box>

      {/* 이미지 */}
      <Image
        src={SliderItems[slider].src}
        alt={SliderItems[slider].title}
        w="100%"
        h="100%"
        objectFit="cover"
        borderRadius="md"
      />

      {/* 도트 */}
      <Flex position="absolute" bottom="10px" left="0" right="0" justify="center" zIndex={1}>
        {SliderItems.map((_item, index) => (
          <Text key={index} cursor="pointer" mx="1" fontSize="lg" color="white" onClick={() => goToSlide(index)}>
            {index === slider ? '●' : '○'}
          </Text>
        ))}
      </Flex>
    </Box>
  );
}
