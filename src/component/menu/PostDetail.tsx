import { styled } from 'styled-components';

export default function PostDetail() {
  return (
    <Container>
      <Title>대회</Title>
      <PostContainer>
        <PostIitle> title: doc.data().title</PostIitle>
        <PostInfo>
          <PostItem>조회</PostItem>
          <PostItem>추천</PostItem>
          <PostItem>댓글</PostItem>
          <PostItem>userId: doc.data().userId,</PostItem>
          <PostItem>날짜</PostItem>
        </PostInfo>
      </PostContainer>
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

const PostContainer = styled.div``;
const PostIitle = styled.h2``;
const PostInfo = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`;
const PostItem = styled.li`
  padding: 8px 6px;
  font-size: 15px;
  line-height: 1.2;

  &:first-child {
    margin-left: auto;
  }

  &:nth-child(n + 4) {
    order: -1;
  }
`;
