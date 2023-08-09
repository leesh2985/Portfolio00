import { dbService } from '../body/right/loginfolder/FireBase';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Reply from './Reply';

interface PostData {
  id: number;
  title: string;
  userId: string;
  body: string;
  postId: number; // postId 필드 추가
}

export default function PostDetail() {
  const { postId } = useParams(); // 동적으로 바뀐 URL 매개변수를 받아옴
  const [like, setLike] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(dbService, 'Contest'));
      const matchingData: PostData[] = []; // 타입을 명시적으로 지정합니다.

      querySnapshot.forEach(doc => {
        const postData = doc.data() as PostData;
        console.log(postData.id);
        if (postData.id === Number(postId)) {
          // doc.id와 postData.postId를 비교
          matchingData.push(postData);
        }
      });

      if (matchingData.length > 0) {
        const postData = matchingData[0]; // 첫 번째 데이터를 사용
        console.log('Title:', postData.title);
        console.log('User ID:', postData.userId);
        console.log('Body:', postData.body);
      } else {
        console.log('No matching data found');
      }
    };

    fetchData();
  }, [postId]);

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <Container>
      <Title>대회</Title>
      <PostContainer>
        {post ? (
          <>
            <PostTitle>{post.title}</PostTitle>
            <PostInfo>
              <PostItem>조회</PostItem>
              <PostItem>추천</PostItem>
              <PostItem>{post.userId}</PostItem>
              <PostItem>날짜</PostItem>
            </PostInfo>
            <PostContents>
              <PostText>{post.body}</PostText>
              <PostLike onClick={handleLike}>
                <PostIcon>👍 </PostIcon>
                {like}
              </PostLike>
            </PostContents>
            <Reply />
          </>
        ) : (
          <p>Loading...</p>
        )}
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

const PostTitle = styled.h2`
  margin-top: 20px;
  padding: 15px 15px 10px 5px;
  text-align: left;
  font-size: 27px;
  font-weight: bold;
  border-top: 3px solid #0077b3;
`;

const PostInfo = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  border-bottom: 2px solid #0077b3;
`;
const PostItem = styled.li`
  padding-left: 5px;
  padding-bottom: 15px;
  font-size: 15px;
  line-height: 1.2;

  &::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #a9a9a9;
    margin: 4px 7px 0;
  }

  &:first-child {
    margin-left: auto;
  }

  &:nth-child(n + 3) {
    order: -1;
  }

  &:nth-child(3)::before {
    padding-left: 5px;
    display: none;
  }
`;

const PostContents = styled.div`
  border-bottom: 3px solid #0077b3;
  padding-bottom: 15px;
`;

const PostText = styled.p`
  padding: 15px 15px 15px 5px;
  text-align: left;
`;
const PostLike = styled.h3`
  cursor: pointer;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  width: 5%;
  margin: 0 auto;
  padding: 10px;
`;

const PostIcon = styled.span``;

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
