import { Box, Button, Flex, FormControl, Input, Stack, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Box p="20px" border="1px solid #d3d3d3" borderRadius="10px" bg="white" textAlign="center">
      <FormControl>
        <Flex justify="space-between" align="center" gap={4}>
          <Stack spacing={3} flex={1}>
            <Input variant="outline" placeholder="아이디" size="sm" borderColor="#E9E9E9" borderRadius="md" />
            <Input variant="outline" placeholder="비밀번호" size="sm" borderColor="#E9E9E9" borderRadius="md" />
          </Stack>

          <Button colorScheme="blue" type="submit" height="4.75rem" px={6} whiteSpace="nowrap">
            로그인
          </Button>
        </Flex>
      </FormControl>

      <Flex mt={4} justify="center" gap={3} fontSize="sm">
        <Text as="span" cursor="pointer">
          아이디 찾기
        </Text>
        <Text as="span" color="gray.400">
          |
        </Text>
        <ChakraLink as={Link} to="/join-login" fontWeight="bold">
          회원가입하기
        </ChakraLink>
      </Flex>
    </Box>
  );
}
