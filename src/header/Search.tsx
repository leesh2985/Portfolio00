import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

interface SearchProps {
  theme: string;
}

export default function Search({ theme }: SearchProps) {
  return (
    <SearchBox>
      <SearchInput type="search" name="search" placeholder="검색어를 입력해 주세요" theme={theme} />
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </SearchBox>
  );
}

const SearchBox = styled.div`
  display: flex;
`;

const SearchInput = styled.input<SearchProps>`
  border: none;
  width: 330px;
  height: 40px;
  background-color: transparent;
  border-bottom: 1px solid ${props => (props.theme === 'dark' ? '#fff' : '#000')};
  outline: none;
`;

const SearchButton = styled.button`
  font-size: 1.25rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
