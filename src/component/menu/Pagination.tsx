import styled from 'styled-components';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({ postsPerPage, totalPosts, paginate }: PaginationProps) {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationContainer>
      <nav>
        <PageUl>
          {/* 왼쪽 화살표 아이콘 */}
          <PageLi onClick={() => paginate(Math.max(pageNumbers[0] - 1, 1))}>
            <PageSpan>
              {' '}
              <AiFillCaretLeft />
            </PageSpan>
          </PageLi>
          {pageNumbers.map(number => (
            <PageLi key={number} onClick={() => paginate(number)}>
              <PageSpan>{number}</PageSpan>
            </PageLi>
          ))}
          {/* 오른쪽 화살표 아이콘 */}
          <PageLi onClick={() => paginate(Math.min(pageNumbers[pageNumbers.length - 1] + 1, pageNumbers.length))}>
            <PageSpan>
              <AiFillCaretRight />
            </PageSpan>
          </PageLi>
        </PageUl>
      </nav>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  margin: 0 auto;
  max-width: 1380px;
  display: flex;
  justify-content: center;
`;

const PageUl = styled.ul`
  display: flex;
  text-align: center;
  padding: 10px;
  height: auto;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 50%;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: #00cc99;
    border: 1px solid #00cc99;
  }
  &:focus::after {
    color: #00cc99;
    border: 1px solid #00cc99;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
