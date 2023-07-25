import styled from 'styled-components';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({ postsPerPage, totalPosts, paginate }: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationContainer>
      <nav>
        <PageUl>
          {pageNumbers.map(number => (
            <PageLi key={number}>
              <PageSpan onClick={() => paginate(number)}>{number}</PageSpan>
            </PageLi>
          ))}
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
  float: left;
  list-style: none;
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
