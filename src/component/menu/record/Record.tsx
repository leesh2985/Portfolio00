import { useEffect, useState } from 'react';
import Posts from './RecordPosts';
import Pagination from '../Pagination';
import { styled } from 'styled-components';
import { dbService } from '../../../component/body/right/loginfolder/FireBase';
import { getDocs, collection } from 'firebase/firestore';
import { Heading } from '@chakra-ui/react';

export default function Record() {
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [totalPosts, setTotalPosts] = useState(1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  useEffect(() => {
    const fetchTotalPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(dbService, 'Record'));
        setTotalPosts(querySnapshot.docs.length); // 파이어스토어의 데이터 개수로 설정
      } catch (error) {
        console.error('Error fetching totalPosts:', error);
      }
    };

    fetchTotalPosts();
  }, []);

  return (
    <Container>
      <Heading as="h2" fontSize="1.5rem" color="#1e8ec7" mt="30px" mb="1.125rem" fontWeight="bold" textAlign="left">
        기록공유
      </Heading>
      <Posts loading={loading} startIndex={startIndex} endIndex={endIndex}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={setCurrentPage}
        isLoggedIn={false}></Pagination>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1380px;
  height: auto;
  margin: 0 auto;
`;
