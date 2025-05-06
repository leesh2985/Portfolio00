import { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import { styled } from 'styled-components';
import { getDocs, collection } from 'firebase/firestore';
import { dbService } from '../../../component/body/right/loginfolder/FireBase';
import { Heading, SimpleGrid, Card, CardBody, Image } from '@chakra-ui/react';

export default function Contest() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [totalPosts, setTotalPosts] = useState(1);

  useEffect(() => {
    const fetchTotalPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(dbService, 'Contest'));
        setTotalPosts(querySnapshot.docs.length);
      } catch (error) {
        console.error('Error fetching totalPosts:', error);
      }
    };

    fetchTotalPosts();
  }, []);

  return (
    <Container>
      <Heading as="h2" fontSize="1.5rem" color="#1e8ec7" mt="30px" mb="1.125rem" fontWeight="bold" textAlign="left">
        이벤트
      </Heading>

      <SimpleGrid columns={5} spacing={14}>
        {[
          '/img/대회1.png',
          '/img/대회2.jpg',
          '/img/대회3.jpg',
          '/img/대회4.jpg',
          '/img/대회5.jpg',
          '/img/대회6.jpg',
          '/img/대회7.png',
          '/img/대회8.jpg',
          '/img/대회9.jpg',
          '/img/대회10.jpg',
        ].map((src, idx) => (
          <Card key={idx} overflow="hidden" border="1px solid #e2e8f0">
            <CardBody p={0}>
              <Image
                src={src}
                alt={`마라톤 이미지 ${idx + 1}`}
                objectFit="cover"
                width="100%"
                height="300px"
                cursor="pointer"
              />
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={setCurrentPage} isLoggedIn={false} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1380px;
  height: auto;
  margin: 0 auto;
`;
