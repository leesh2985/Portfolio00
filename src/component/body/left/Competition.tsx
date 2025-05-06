import { Box, Flex, Heading, Icon, Image, SimpleGrid, Card, CardBody } from '@chakra-ui/react';
import { CiCirclePlus } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

export default function News() {
  const navigate = useNavigate();

  return (
    <Box width="100%">
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Flex alignItems="center" gap={3}>
          <Heading fontSize="2xl" fontWeight="bold">
            이번달 마라톤 경기
          </Heading>
          <Icon as={CiCirclePlus} boxSize={7} color="gray.500" cursor="pointer" onClick={() => navigate('/contest')} />
        </Flex>
      </Flex>

      <SimpleGrid columns={4} spacing={4}>
        {[
          '/img/대회1.png',
          '/img/대회2.jpg',
          '/img/대회3.jpg',
          '/img/대회4.jpg',
          '/img/대회5.jpg',
          '/img/대회6.jpg',
          '/img/대회7.png',
          '/img/대회8.jpg',
        ].map((src, idx) => (
          <Card key={idx} overflow="hidden">
            <CardBody p={0}>
              <Image
                src={src}
                alt={`마라톤 이미지 ${idx + 1}`}
                objectFit="cover"
                width="100%"
                height="8.75rem"
                cursor="pointer"
              />
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
