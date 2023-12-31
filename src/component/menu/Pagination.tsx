import styled from 'styled-components';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../body/right/loginfolder/FireBase';
import { User } from 'firebase/auth';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  isLoggedIn: boolean; // 추가: 로그인 여부를 전달받음
}

interface PageSpanProps {
  $isActive?: boolean;
  disabled?: boolean;
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleWriteBtnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isLoggedIn) {
      e.preventDefault(); // 링크 이동을 막음
      window.alert('로그인이 필요합니다. 로그인을 부탁드립니다.');
      return;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        setIsLoggedIn(true);
        // setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <PaginationContainer>
      <nav>
        <PageUl>
          {/* 왼쪽 화살표 아이콘 */}
          <PageLi onClick={handlePrevClick}>
            <PageArrow $isDisabled={currentPage === 1}>
              <AiFillCaretLeft />
            </PageArrow>
          </PageLi>
          {pageNumbers.map(number => (
            <PageLi key={number} onClick={() => handlePageClick(number)} disabled={currentPage === number}>
              <PageSpan $isActive={currentPage === number}>{number}</PageSpan>
            </PageLi>
          ))}
          {/* 오른쪽 화살표 아이콘 */}
          <PageLi onClick={handleNextClick}>
            <PageArrow $isDisabled={currentPage === pageNumbers.length}>
              <AiFillCaretRight />
            </PageArrow>
          </PageLi>
        </PageUl>
      </nav>
      <WriteBtn to={isLoggedIn ? '/writing' : '#'} onClick={handleWriteBtnClick}>
        글쓰기
      </WriteBtn>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  margin: 0 auto;
  max-width: 1380px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
    props.$isActive &&
    `
    color: #00cc99;
    border: 1px solid #00cc99; 
    border-radius: 50%;
    cursor: pointer;
    padding: 0px 10px 5px 10px;
  `}
`;

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

const PageArrow = styled.span<{ $isDisabled: boolean }>`
  ${props =>
    props.$isDisabled &&
    `
    color: #808080;
  `}
`;
