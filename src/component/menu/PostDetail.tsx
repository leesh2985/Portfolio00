import { dbService } from '../body/right/loginfolder/FireBase';
import { getDocs, collection, query } from 'firebase/firestore';
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
  createdAt: string;
}

export default function PostDetail() {
  const { postId } = useParams(); // 동적으로 바뀐 URL 매개변수를 받아옴
  const [like, setLike] = useState(0);
  const [matchingData, setMatchingData] = useState<PostData[]>([]); // matchingData 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(query(collection(dbService, 'Contest')));
      const data: PostData[] = [];

      querySnapshot.forEach(doc => {
        const postData = doc.data() as PostData;
        if (postData.id === Number(postId)) {
          data.push(postData);
        }
      });

      if (data.length > 0) {
        setMatchingData(data); // matchingData 상태 업데이트
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
        {matchingData.length > 0 ? (
          <>
            <PostTitle>{matchingData[0].title}</PostTitle>
            <PostInfo>
              <PostItem>조회</PostItem>
              <PostItem>추천</PostItem>
              <PostItem>{matchingData[0].userId}</PostItem>
              <PostItem>{matchingData[0].createdAt}</PostItem>
            </PostInfo>
            <PostContents>
              <PostText>{matchingData[0].body}</PostText>
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

  &:active {
    color: #242424;
  }
`;
