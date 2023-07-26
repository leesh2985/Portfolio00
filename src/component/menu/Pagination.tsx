import styled from 'styled-components';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

interface PageSpanProps {
  isActive?: boolean;
}

export default function Pagination({ postsPerPage, totalPosts, paginate }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      paginate(prevPage);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      paginate(nextPage);
    }
  };

  const handlePageClick = (number: number) => {
    setCurrentPage(number);
    paginate(number);
  };

  return (
    <PaginationContainer>
      <nav>
        <PageUl>
          {/* 왼쪽 화살표 아이콘 */}
          <PageLi onClick={handlePrevClick} disabled={currentPage === 1}>
            <PageSpan isActive={currentPage === 1}>
              {' '}
              <AiFillCaretLeft />
            </PageSpan>
          </PageLi>
          {pageNumbers.map(number => (
            <PageLi key={number} onClick={() => handlePageClick(number)} disabled={currentPage === number}>
              <PageSpan isActive={currentPage === number}>{number}</PageSpan>
            </PageLi>
          ))}
          {/* 오른쪽 화살표 아이콘 */}
          <PageLi onClick={handleNextClick} disabled={currentPage === pageNumbers.length}>
            <PageSpan isActive={currentPage === pageNumbers.length}>
              <AiFillCaretRight />
            </PageSpan>
          </PageLi>
        </PageUl>
      </nav>
      <WriteBtn>글쓰기</WriteBtn>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  margin: 0 auto;
  max-width: 1380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageUl = styled.ul`
  display: flex;
  text-align: center;
  padding: 10px;
  margin: 20px;
`;

const PageLi = styled.li<{ disabled?: boolean }>`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 50%;
  width: 25px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  color: ${props => (props.disabled ? '#808080' : 'inherit')};

  /* &:focus::after {
    color: #00cc99;
    border: 1px solid #00cc99;
  } */
`;

const PageSpan = styled.span<PageSpanProps>`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }

  ${props =>
    props.isActive &&
    `
    color: #00cc99;
    border: 1px solid #00cc99; 
    border-radius: 50%;
    cursor: pointer;
    padding: 0px 10px 5px 10px;
  `}
`;

const WriteBtn = styled.button`
  background-color: #1e8ec7;
  border: 1px solid #1e8ec7;
  font-size: 15px;
  border-radius: 15px;
  color: #fff;
  height: auto;
  padding: 10px 15px;
`;
