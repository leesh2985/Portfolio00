import { styled } from 'styled-components';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { dbService } from '../body/right/loginfolder/FireBase';

interface PostProps {
  posts: { id: number; title: string; userId: string }[]; // userId 추가
  loading: boolean;
}

export default function Posts({ posts, loading }: PostProps) {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(dbService, 'Contest'));
      querySnapshot.forEach(doc => {
        console.log(doc.id, doc.data());
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <TopLine>
        <TopUl>
          <Topli>NO.</Topli>
          <Topli>제목</Topli>
          <Topli>글쓴이</Topli>
        </TopUl>
      </TopLine>{' '}
      {/* 상단 줄 */}
      {loading && <div>loading...</div>}
      <PostsUl>
        {posts.map(post => (
          <PostLi>
            <LiCol>
              {post.id} {/* id 표시 */}
            </LiCol>
            <LiCol>{post.title}</LiCol>
            <LiCol>
              {post.userId} {/* userId 표시 */}
            </LiCol>
          </PostLi>
        ))}
      </PostsUl>
    </>
  );
}

const TopLine = styled.div`
  border-bottom: 2px solid #1e8ec7;
  padding-bottom: 15px;
  margin-top: 20px;
`;

const TopUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  max-width: 1380px;
  margin-top: 35px;
`;

const Topli = styled.li`
  font-weight: bold;
  color: #808080;
  font-size: 23px;
  flex: 1; /* 변경된 부분: 모든 Topli의 크기를 같게 설정 */

  &:nth-child(2) {
    flex: 7; /* 변경된 부분: 두 번째 Topli를 다른 Topli들보다 크게 설정 */
  }
`;

const PostsUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const PostLi = styled.li`
  display: flex;
  border-bottom: 1px solid #1e8ec7;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LiCol = styled.div`
  flex: 1;

  &:nth-child(2) {
    flex: 7; /* 변경된 부분: 두 번째 Topli를 다른 Topli들보다 크게 설정 */
  }
`;
