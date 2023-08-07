import { Link } from 'react-router-dom';
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
        <PostContents>
          <PostText></PostText>
          <PostLike>❤️ 0</PostLike>
        </PostContents>
        <ReplyContents>
          <ReplyTitle>전체댓글 0개</ReplyTitle>
          <ReplyInfo>
            <ReplyItem>글쓴이</ReplyItem>
            <ReplyItem>댓글</ReplyItem>
            <ReplyItem>날짜</ReplyItem>
          </ReplyInfo>
          <ReplyInput>로그인 후 댓글을 작성할수 있습니다.</ReplyInput>
        </ReplyContents>
      </PostContainer>
      <WriteBtn to="/writing">글쓰기</WriteBtn>
      <ListBtn to="/contest">목록</ListBtn>
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
  border-top: 3px solid #0077b3;
  border-bottom: 2px solid #0077b3;
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

const PostContents = styled.div`
  border-bottom: 3px solid #0077b3;
`;

const PostText = styled.p``;
const PostLike = styled.span``;

const ReplyContents = styled.div``;
const ReplyTitle = styled.div``;

const ReplyInfo = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  border-top: 3px solid #0077b3;
`;

const ReplyItem = styled.li`
  border-bottom: 1px solid #0077b3;
`;

const ReplyInput = styled.div``;

const WriteBtn = styled(Link)`
  background-color: #1e8ec7;
  border: 1px solid #1e8ec7;
  font-size: 15px;
  border-radius: 15px;
  color: #fff;
  height: auto;
  padding: 10px 15px;
  position: absolute;
  right: 0;
  text-decoration: none;
`;

const ListBtn = styled(Link)`
  background-color: #fff;
  border: 1px solid #242424;
  font-size: 15px;
  border-radius: 15px;
  height: auto;
  padding: 10px 15px;
  position: absolute;
  right: 0;
  text-decoration: none;
`;
