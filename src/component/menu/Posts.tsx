import { styled } from 'styled-components';

interface PostProps {
  posts: { id: number; title: string; userId: number }[]; // userId 추가
  loading: boolean;
}

export default function Posts({ posts, loading }: PostProps) {
  return (
    <>
      <TopLine>
        <TopUl>
          <Topli>순서</Topli>
          <Topli>제목</Topli>
          <Topli>글쓴이</Topli>
        </TopUl>
      </TopLine>{' '}
      {/* 상단 줄 */}
      {loading && <div>loading...</div>}
      <PostsUl>
        {posts.map(post => (
          <PostLi key={post.id}>
            {post.id} {/* id 표시 */}
            {post.title}
            {post.userId} {/* userId 표시 */}
          </PostLi>
        ))}
      </PostsUl>
    </>
  );
}

const TopLine = styled.div`
  border-bottom: 2px solid #1e8ec7;
  margin-bottom: 10px;
  padding-bottom: 5px;
  margin-top: 20px;
`;

const TopUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  max-width: 1380px;
`;
const Topli = styled.li`
  flex-basis: 500px;

  &:nth-child(1) {
    flex-shrink: 1;
  }
  &:nth-child(2) {
    flex-shrink: 3;
  }
  &:nth-child(3) {
    flex-shrink: 1;
  }
`;

const PostsUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
const PostLi = styled.li`
  border-bottom: 1px solid #1e8ec7;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:nth-child(1) {
    flex-shrink: 1;
  }
  &:nth-child(2) {
    flex-shrink: 3;
  }
  &:nth-child(3) {
    flex-shrink: 1;
  }
`;
