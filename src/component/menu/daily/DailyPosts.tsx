import { styled } from 'styled-components';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { dbService } from '../../../component/body/right/loginfolder/FireBase';
import { Link } from 'react-router-dom';

interface PostProps {
  loading: boolean;
  startIndex: number;
  endIndex: number;
}

export default function DailyPosts({ loading, startIndex, endIndex }: PostProps) {
  const [posts, setPosts] = useState<{ id: number; title: string; userId: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(query(collection(dbService, 'Daily'), orderBy('id', 'desc')));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.data().id,
        title: doc.data().title,
        userId: doc.data().userId,
      }));

      setPosts(data);
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
        {posts
          .slice(startIndex, endIndex) // startIndex부터 endIndex 직전까지의 게시물을 선택
          .map(post => (
            <PostLi key={post.id}>
              <LiCol>
                {post.id} {/* id 표시 */}
              </LiCol>
              <LiCol>
                <DetailLink to={`/dailypostdetail/${post.id}`}>{post.title}</DetailLink>
              </LiCol>
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

const DetailLink = styled(Link)`
  color: #242424;
  text-decoration: none;
`;
