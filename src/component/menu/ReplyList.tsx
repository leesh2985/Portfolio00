import { styled } from 'styled-components';

interface ReplyListProps {
  list: { userid: string; content: string; date: string }[];
}

export default function ReplyList(props: ReplyListProps) {
  const renderList = () =>
    props.list.map((v, k) => {
      return (
        <CommentRow key={k}>
          <ConnentId>{v.userid}</ConnentId>
          <ConnentContent>
            <span>{v.content}</span>
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
`;

const ConnentDate = styled.li`
  flex: 1;
  color: #a9a9a9;
  padding-right: 10px;
  text-align: right;
`;
