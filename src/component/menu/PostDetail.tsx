import { auth, dbService } from '../body/right/loginfolder/FireBase';
import { getDocs, collection, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Reply from './Reply';
import { User } from 'firebase/auth';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<User | null>(null); // User 타입의 상태를 추가합니다.

  // 수정 상태와 수정한 제목 및 내용을 관리하는 상태
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');
  const [isAuthor, setIsAuthor] = useState(true);

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
        if (userObj && data[0].userId === userObj.uid) {
          setIsAuthor(true);
        }
      }
    };

    fetchData();
  }, [postId, userObj]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      // User 타입을 명시적으로 지정합니다.
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user); // 사용자 정보를 저장합니다.
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedTitle(matchingData[0].title);
    setEditedBody(matchingData[0].body);
  };

  const handleUpdate = async () => {
    const postRef = doc(dbService, 'Contest', matchingData[0].postId.toString());
    await updateDoc(postRef, {
      title: editedTitle,
      body: editedBody,
    });
    setIsEditing(false);
  };

  const handleDelete = async () => {
    const postRef = doc(dbService, 'Contest', matchingData[0].postId.toString());
    await deleteDoc(postRef);
    // 게시물 삭제 후, 리다이렉트 또는 원하는 동작 수행
  };

  return (
    <Container>
      <Title>대회</Title>
      <PostContainer>
        {matchingData.length > 0 ? (
          <>
            <PostTitle>{matchingData[0].title}</PostTitle>
            <PostInfo>
              <PostItem>추천 {like}</PostItem>
              <PostItem>{matchingData[0].createdAt}</PostItem>
              <PostItem>{matchingData[0].userId}</PostItem>
            </PostInfo>
            <PostContents>
              {isAuthor && !isEditing && (
                <BtnDiv>
                  {/* 삭제 버튼 */}
                  <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
                  {/* 수정 버튼 */}
                  <EditButton onClick={handleEditClick}>수정</EditButton>
                </BtnDiv>
              )}
              {isEditing ? (
                <div>
                  {/* 수정할 내용 입력 폼 */}
                  <input type="text" value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
                  <textarea value={editedBody} onChange={e => setEditedBody(e.target.value)} />
                  {/* 저장 버튼 */}
                  <SaveButton onClick={handleUpdate}>저장</SaveButton>
                  {/* 취소 버튼 */}
                  <CancelButton onClick={() => setIsEditing(false)}>취소</CancelButton>
                </div>
              ) : (
                <PostText>{matchingData[0].body}</PostText>
              )}
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

  &:nth-child(n + 2) {
    order: -1;
  }

  &:nth-child(2)::before {
    padding-left: 5px;
    display: none;
  }

  &:nth-child(1) {
    padding-right: 7px;
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

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 7px;
`;
const EditButton = styled.button`
  border: 1px solid #cdcdcd;
  margin-right: 10px;
`;
const DeleteButton = styled.button`
  border: 1px solid #cdcdcd;
`;
const SaveButton = styled.button`
  border: 1px solid #cdcdcd;
`;
const CancelButton = styled.button`
  border: 1px solid #cdcdcd;
`;
