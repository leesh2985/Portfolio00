import { useState, useEffect } from 'react';
import { getFirestore, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { styled } from 'styled-components';

interface Comment {
  id: string;
  userid: string;
  content: string;
  date: string;
}

interface ReplyListProps {
  list: Comment[];
  updateList: (updatedList: Comment[]) => void;
  user: string;
}

export default function ReplyList(props: ReplyListProps) {
  const [update, setUpdate] = useState<number>(-1);
  const [value, setValue] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const commentsCollection = collection(db, 'comments');
      const querySnapshot = await getDocs(commentsCollection);
      const data: Comment[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Comment));
      setComments(data);
    };

    fetchData();
  }, []);

  const handleEditClick = (index: number) => () => {
    // () => 빈 함수로 수정
    if (props.list[index].userid === props.user) {
      setValue(props.list[index].content);
      setUpdate(index);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleUpdateClick = (k: number) => async () => {
    const newList = [...props.list];
    newList[k].content = value;

    setUpdate(-1);
    setValue('');

    props.updateList(newList);

    // 댓글 내용 업데이트 후 Firestore에도 업데이트
    const db = getFirestore();
    const commentRef = doc(db, 'comments', comments[k].id);
    await updateDoc(commentRef, { content: value });
  };

  const deleteList = async (k: number) => {
    const newList = props.list.filter((_v, i) => i !== k);
    props.updateList(newList);

    // 댓글 삭제 후 Firestore에서도 삭제
    const db = getFirestore();
    const commentRef = doc(db, 'comments', comments[k].id);
    await deleteDoc(commentRef);
  };

  const renderList = () =>
    props.list
      .slice() // 원본 배열을 수정하지 않기 위해 복사본을 생성
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // 날짜를 기준으로 내림차순 정렬
      .map((v, k) => {
        const isUpdating = update === k;
        const isCurrentUser = v.userid === props.user;

        return (
          <CommentRow key={k}>
            <ConnentId>{v.userid}</ConnentId>
            <ConnentContent>
              {isUpdating && v.userid === props.user ? (
                <>
                  <input type="text" value={value} onChange={handleChange} className="comment-update-input" />
                  <UpdateButton onClick={handleUpdateClick(k)}>확인</UpdateButton>
                </>
              ) : (
                <>
                  <span>{v.content}</span>
                  {v.userid === props.user && <EditButton onClick={handleEditClick(k)}>수정</EditButton>}
                  {isCurrentUser && <CommentDeleteBtn onClick={() => deleteList(k)}>삭제</CommentDeleteBtn>}
                </>
              )}
            </ConnentContent>
            <ConnentDate>{v.date}</ConnentDate>
          </CommentRow>
        );
      });

  return <ReplyLi>{renderList()}</ReplyLi>;
}

const ReplyLi = styled.li`
  margin-bottom: 20px;
`;

const CommentRow = styled.ul`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #0077b3;
  align-items: center;

  &:nth-child(n + 2) {
    padding-top: 10px;
  }
`;

const ConnentId = styled.li`
  flex: 1;
  font-weight: bold;
  padding-left: 10px;
  text-align: left;
`;

const ConnentContent = styled.li`
  flex: 7; /* 너비를 조절하여 크기를 설정 */
  text-align: left;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

const UpdateButton = styled.button`
  margin-left: 10px;
  border: 1px solid #cdcdcd;
`;

const EditButton = styled.button`
  margin-left: 10px;
  border: 1px solid #cdcdcd;
`;

const CommentDeleteBtn = styled.button`
  margin-left: 10px;
  border: 1px solid #cdcdcd;
`;

const ConnentDate = styled.li`
  flex: 1;
  color: #a9a9a9;
  padding-right: 10px;
  text-align: right;
`;
