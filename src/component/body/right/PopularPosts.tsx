import { Box, Flex, Text, Badge, HStack, Stack } from '@chakra-ui/react';

export default function PopularPosts() {
  const popularPosts = [
    { title: '도심 속 야간 마라톤 대회 후기', date: '2023.05.13' },
    { title: '6월 하순 마라톤 코스 완전 정복!', date: '2023.06.26' },
    { title: '봄바람과 함께 달린 지방 대회 리뷰', date: '2023.05.19' },
    { title: '비 오는 날 마라톤, 준비는 이렇게!', date: '2023.04.30' },
    { title: '초보 러너를 위한 5km 완주 전략', date: '2023.04.29' },
    { title: '여름 마라톤 대비 수분 보충 팁', date: '2023.06.09' },
    { title: '가족과 함께한 주말 마라톤 행사', date: '2023.06.08' },
    { title: '첫 풀코스 도전, 이렇게 준비했어요', date: '2023.05.05' },
    { title: '마라톤 전날 식단과 루틴 소개', date: '2023.05.11' },
    { title: '러닝화를 바꾼 뒤 기록 향상 후기', date: '2023.05.16' },
  ];

  return (
    <Box overflow="hidden">
      <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="start">
        인기글
      </Text>

      <Stack spacing={2}>
        {popularPosts.map((post, i) => (
          <Flex key={i} justify="space-between" align="center" cursor="pointer" _hover={{ bg: 'gray.50' }}>
            <HStack>
              <Badge colorScheme="green" borderRadius="full" px="2" textAlign="center">
                {i + 1}
              </Badge>
              <Text fontSize="md" noOfLines={1}>
                {post.title}
              </Text>
            </HStack>
            <Text fontSize="sm" color="gray.500">
              {post.date}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}
