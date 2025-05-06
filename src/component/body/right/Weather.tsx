import { useEffect, useState } from 'react';
import { Box, Text, Image, Flex, Spinner } from '@chakra-ui/react';
import { SlDrop } from 'react-icons/sl';

interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_WEATHER_KEY;
  const city = 'Incheon';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('날씨 정보를 불러오지 못했습니다.', error);
      }
    };

    fetchWeather();
  }, [apiKey]);

  if (loading || !weather) {
    return <Spinner />;
  }

  const { temp, temp_max, temp_min, humidity } = weather.main;
  const desc = weather.weather[0].description;
  const icon = weather.weather[0].icon;

  return (
    <Box position="relative" w="100%" h="100%" borderRadius="lg" overflow="hidden" color="white">
      {/* 배경 이미지 + 어둡게 처리 */}
      <Box
        bgImage="url('/img/sky.jpg')"
        bgSize="cover"
        bgPosition="center"
        filter="brightness(0.5)"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={0}
      />

      {/* 내용 */}
      <Box position="relative" zIndex={1} p={6}>
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="5xl" fontWeight="bold">
            {(temp - 273.15).toFixed(0)}°
          </Text>
          <Flex direction="column" align="center">
            <Image src={`https://openweathermap.org/img/w/${icon}.png`} alt="날씨 아이콘" boxSize="40px" mb={1} />
            <Text fontSize="sm">{desc}</Text>
          </Flex>
        </Flex>

        <Flex justify="space-between" fontSize="sm">
          <Text>
            최고 {(temp_max - 273.15).toFixed(0)}° / 최저 {(temp_min - 273.15).toFixed(0)}°
          </Text>
          <Text>
            <SlDrop style={{ marginBottom: '-2px', marginRight: '4px' }} />
            {humidity}%
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
