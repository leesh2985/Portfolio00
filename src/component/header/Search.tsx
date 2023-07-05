import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export default function Search() {
  return (
    <SearchBox>
      <SearchInput type="search" name="search" placeholder="검색어를 입력해 주세요" />
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </SearchBox>
  );
}
const SearchBox = styled.div``;
const SearchInput = styled.input`
  border: none;
  width: 330px;
  height: 40px;
  background-color: transparent;
  border-bottom: 1px solid #000;
`;

const SearchButton = styled.button`
  font-size: 1.25rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
