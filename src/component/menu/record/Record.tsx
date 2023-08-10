import { useEffect, useState } from 'react';
import Posts from './RecordPosts';
import Pagination from '../Pagination';
import { styled } from 'styled-components';
import { dbService } from '../../../component/body/right/loginfolder/FireBase';
import { getDocs, collection } from 'firebase/firestore';

export default function Record() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const [totalPosts, setTotalPosts] = useState(1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  useEffect(() => {
    const fetchTotalPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(dbService, 'Contest'));
        setTotalPosts(querySnapshot.docs.length); // 파이어스토어의 데이터 개수로 설정
      } catch (error) {
        console.error('Error fetching totalPosts:', error);
      }
    };

    fetchTotalPosts();
  }, []);

  return (
    <Container>
      <Title>기록공유</Title>
      <Posts loading={loading} startIndex={startIndex} endIndex={endIndex}></Posts>
      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={setCurrentPage}></Pagination>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1380px;
  height: auto;
  margin: 0 auto;
`;

const Title = styled.p`
  max-width: 1380px;
  text-align: left;
  font-weight: bold;
  font-size: 40px;
  color: #1e8ec7;
  margin-top: 50px;
`;
