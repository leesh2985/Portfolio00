import { useState } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import { styled } from 'styled-components';

export default function Contest() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  return (
    <Container>
      <Title>대회</Title>
      <Posts loading={loading}></Posts>
      <Pagination postsPerPage={postsPerPage} totalPosts={100} paginate={setCurrentPage}></Pagination>
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
