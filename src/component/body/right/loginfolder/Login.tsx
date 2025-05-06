import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Stack,
  Text,
  Link as ChakraLink,
  useToast,
  Card,
  CardBody,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './FireBase';
import { Link } from 'react-router-dom';

export default function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [user, setUser] = useState<any>(null);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    if (!values.email || !values.password) {
      setErrorMsg('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      setUser(userCredential.user);
      localStorage.setItem('email', JSON.stringify(userCredential.user));
      toast({
        title: '로그인 성공!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setErrorMsg('');
    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        setErrorMsg('등록되지 않은 사용자입니다.');
      } else if (err.code === 'auth/wrong-password') {
        setErrorMsg('비밀번호가 올바르지 않습니다.');
      } else {
        setErrorMsg('로그인 중 오류가 발생했습니다.');
      }
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    localStorage.removeItem('email');
    toast({
      title: '로그아웃 완료',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p="20px" border="1px solid #d3d3d3" borderRadius="10px" bg="white" textAlign="center" maxW="420px" mx="auto">
      {user ? (
        <>
          <Flex justify="space-between" align="center" mb={4}>
            <Flex align="center">
              <Card borderRadius="full" overflow="hidden" boxShadow="sm" w="80px" h="80px">
                <CardBody p={0}>
                  <Image src="/img/profile.png" alt="기록1" objectFit="cover" width="100%" height="100%" />
                </CardBody>
              </Card>
              <Flex direction="column" alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold">
                  {user.displayName || '사용자'}님
                </Text>
                <Text fontSize="sm" color="gray.500" mt={1}>
                  평균기록 06.35
                </Text>
              </Flex>
            </Flex>

            <Button size="sm" variant="outline" colorScheme="gray" onClick={handleLogout}>
              로그아웃
            </Button>
          </Flex>
          <Flex direction="column" mt={4} gap={2} alignItems="flex-start">
            <Text>참여한 마라톤</Text>
            <Flex gap={3}>
              <Card borderRadius="md" overflow="hidden" boxShadow="sm" w="80px" h="80px">
                <CardBody p={0}>
                  <Image src="/post/post1.jpg" alt="기록1" objectFit="cover" width="100%" height="100%" />
                </CardBody>
              </Card>
              <Card borderRadius="md" overflow="hidden" boxShadow="sm" w="80px" h="80px">
                <CardBody p={0}>
                  <Image src="/post/post2.jpg" alt="기록2" objectFit="cover" width="100%" height="100%" />
                </CardBody>
              </Card>
              <Card borderRadius="md" overflow="hidden" boxShadow="sm" w="80px" h="80px">
                <CardBody p={0}>
                  <Image src="/img/대회1.png" alt="기록2" objectFit="cover" width="100%" height="100%" />
                </CardBody>
              </Card>
              <Card borderRadius="md" overflow="hidden" boxShadow="sm" w="80px" h="80px">
                <CardBody p={0}>
                  <Image src="/img/대회7.png" alt="기록2" objectFit="cover" width="100%" height="100%" />
                </CardBody>
              </Card>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <FormControl>
            <Flex justify="space-between" align="center" gap={4}>
              <Stack spacing={3} flex={1}>
                <Input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="아이디"
                  size="sm"
                  borderColor="#E9E9E9"
                  borderRadius="md"
                />
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="비밀번호"
                  size="sm"
                  borderColor="#E9E9E9"
                  borderRadius="md"
                />
              </Stack>
              <Button colorScheme="blue" height="4.75rem" px={6} whiteSpace="nowrap" onClick={handleLogin}>
                로그인
              </Button>
            </Flex>
          </FormControl>

          {errorMsg && (
            <Text mt={3} fontSize="sm" color="red.500">
              {errorMsg}
            </Text>
          )}

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
        </>
      )}
    </Box>
  );
}
