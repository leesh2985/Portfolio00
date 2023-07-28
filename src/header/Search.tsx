import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { BsArrowUpLeft } from 'react-icons/bs';

interface SearchProps {
  theme: string;
}

interface autoDatas {
  // api를 통해 받아온 데이터 interface
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Search({ theme }: SearchProps) {
  const [keyword, setKeyword] = useState<string>('');
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const [keyItems, setKeyItems] = useState<autoDatas[]>([]);

  // 기존 fetchData 함수를 async/await 문법을 사용해 리팩토링합니다.
  const fetchData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.slice(0, 100);
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  // ICity 인터페이스를 사용하는 대신 includes 함수를 직접 사용합니다.
  const updateData = async () => {
    const res = await fetchData();
    const filteredData = res.filter((item: autoDatas) => item.title.includes(keyword)).slice(0, 10);
    setKeyItems(filteredData);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <SearchBox>
      <SearchInput
        type="search"
        name="search"
        placeholder="검색어를 입력해 주세요"
        theme={theme}
        value={keyword}
        onChange={onChangeData}
      />
      <SearchButton>
        <FiSearch />
      </SearchButton>
      <AutoSearchContainer>
        <AutoSearchWrap>
          {/* keyItems를 순회하며 자동완성 데이터 렌더링 */}
          {keyItems.map(item => (
            <AutoSearchData key={item.id}>
              {/* 실제 검색어를 보여줄 UI로 변경 */}
              <a href="#">{item.title}</a>
              <BsArrowUpLeft />
            </AutoSearchData>
          ))}
        </AutoSearchWrap>
      </AutoSearchContainer>
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
  margin-right: 20px;
`;

const AutoSearchContainer = styled.div`
  z-index: 3;
  height: 50vh;
  width: 300px;
  background-color: #fff;
  position: absolute;
  top: 53px;
  border: 1px solid;
  padding: 15px;
`;

const AutoSearchWrap = styled.ul``;

const AutoSearchData = styled.li`
  padding: 10px 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;
  svg {
    position: absolute;
    right: 5px;
    width: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
