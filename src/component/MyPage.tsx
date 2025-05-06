import { auth } from './body/right/loginfolder/FireBase';
import styled from 'styled-components';
import { Button, Flex, Heading, Text, Card, CardBody, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { User, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface MyPageProps {
  user: User | null;
}

export default function MyPage({ user: _ }: MyPageProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<User | null>(null); // User 타입의 상태를 추가
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      // User 타입을 명시적으로 지정
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user); // 사용자 정보를 저장
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // 로그인하지 않은 경우, 홈화면으로 이동

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        // 로그인되지 않았을 때 처리
        alert('로그아웃 됐습니다.');
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // 사용자 정보가 로드되지 않았을 경우, 로딩 화면을 표시하거나 다른 처리를 할 수 있습니다.
  if (!userObj) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // setValue(null); // 사용자 정보 초기화
        localStorage.clear();
        navigate('/');
      })
      .catch(error => {
        console.log('로그아웃 실패');
        console.log(error);
      });
  };

  return (
    <MyContainer>
      {isLoggedIn ? (
        // 사용자가 로그인한 경우
        <>
          <Flex direction="column" align="center" gap={6} py={10}>
            {/* 프로필 이미지 원형 카드 */}
            <Card borderRadius="full" overflow="hidden" boxShadow="sm" w="150px" h="150px" border="1px solid #d3d3d3">
              <CardBody p={0}>
                <Image src="/img/profile.png" alt="프로필" objectFit="cover" width="100%" height="100%" />
              </CardBody>
            </Card>

            {/* 이름 및 기록 텍스트 영역 */}
            <Flex direction="column" align="center" gap={2}>
              <Text fontSize="xl" fontWeight="bold">
                {userObj.displayName}님
              </Text>
              <Text fontSize="md" color="gray.600">
                평균기록 06.35
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" align="center" mt={8}>
            {/* 마라톤 제목 */}
            <Heading as="h2" size="2xl" mb={4}>
              참여한 마라톤
            </Heading>

            {/* 이미지 목록 */}
            <Flex gap={4} flexWrap="wrap" mb={6}>
              <Image src="/post/post1.jpg" alt="기록1" boxSize="200px" objectFit="cover" borderRadius="md" />
              <Image src="/post/post2.jpg" alt="기록2" boxSize="200px" objectFit="cover" borderRadius="md" />
              <Image src="/img/대회1.png" alt="기록2" boxSize="200px" objectFit="cover" borderRadius="md" />
              <Image src="/img/대회7.png" alt="기록2" boxSize="200px" objectFit="cover" borderRadius="md" />
            </Flex>
          </Flex>
          <Flex align="center" justify="center" gap={4} mt={6}>
            <Button colorScheme="blue" size="md" fontWeight="600" borderRadius="full" px={6} py={2} cursor="pointer">
              개인정보수정
            </Button>

            <Button
              variant="outline"
              colorScheme="gray"
              size="md"
              fontWeight="600"
              px={6}
              py={2}
              onClick={handleLogout}
              cursor="pointer">
              로그아웃
            </Button>
          </Flex>
        </>
      ) : (
        // 사용자가 로그인하지 않은 경우
        <>
          {/* 홈 화면으로 이동 또는 다른 처리를 할 수 있습니다. */}
          로그인이 필요합니다.
        </>
      )}
    </MyContainer>
  );
}

const MyContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding-top: 30px;
  padding-bottom: 50px;
`;
