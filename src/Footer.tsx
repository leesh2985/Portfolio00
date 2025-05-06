import { Box, Flex, Image, List, ListItem } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box width="100%" bg="#f5f6f7" py={6} h="180px">
      {/* 로고 */}
      <Flex direction="column" align="center" maxW="1380px" mx="auto" px={4}>
        <Box pt="40px" mb={5}>
          <Image src="/img/footerlogo.png" alt="로고" w="150px" />
        </Box>

        {/* 상단 메뉴 */}
        <Flex as={List} justify="center" align="center" wrap="wrap" maxW="1380px" p={2}>
          {['이메일 문의', '개인정보취급방침', '사업자정보확인', '권리 침해', '광고/제휴'].map((item, idx) => (
            <ListItem
              key={idx}
              fontSize="sm"
              cursor="pointer"
              px={2}
              color="gray.600"
              _before={{
                content: `""`,
                display: idx === 0 ? 'none' : 'inline-block',
                width: '1px',
                height: '12px',
                backgroundColor: '#a9a9a9',
                marginRight: '12px',
              }}>
              {item}
            </ListItem>
          ))}
        </Flex>

        {/* 하단 정보 */}
        <Flex as={List} justify="center" align="center" wrap="wrap" maxW="1380px" fontSize="xs" color="#808080">
          {['©HDRC', '사업자등록번호 : 1997-12-13', 'TEL : 01029858223', '대표 : 이승현'].map((info, idx) => (
            <ListItem
              key={idx}
              px={2}
              _before={{
                content: `""`,
                display: idx === 0 ? 'none' : 'inline-block',
                width: '1px',
                height: '12px',
                backgroundColor: '#a9a9a9',
                marginRight: '12px',
              }}>
              {info}
            </ListItem>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
