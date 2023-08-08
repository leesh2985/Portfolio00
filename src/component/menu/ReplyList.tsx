import { useState } from 'react';
import { styled } from 'styled-components';

interface ReplyListProps {
  list: { userid: string; content: string; date: string }[];
  updateList: (updatedList: { userid: string; content: string; date: string }[]) => void;
  user: string; // 현재 로그인한 사용자의 ID
}

export default function ReplyList(props: ReplyListProps) {
  const [update, setUpdate] = useState<number>(-1); // 초기값을 -1로 설정
  const [value, setValue] = useState('');

  const handleEditClick = (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.list[index].userid === props.user) {
      // 댓글 작성자와 현재 사용자가 같을 때만 수정 모드로 전환
      setValue(props.list[index].content);
      setUpdate(index);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleUpdateClick = (k: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    const newList = [...props.list]; // 기존 list 복사
    newList[k].content = value; // 새로운 내용으로 변경

    setUpdate(-1); // 업데이트 종료
    setValue(''); // 입력값 초기화

    props.updateList(newList); // 업데이트된 리스트로 업데이트
  };

  const renderList = () =>
    props.list.map((v, k) => {
      const isUpdating = update === k;

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

const ConnentDate = styled.li`
  flex: 1;
  color: #a9a9a9;
  padding-right: 10px;
  text-align: right;
`;
