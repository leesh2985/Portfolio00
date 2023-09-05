import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState, useRef, useCallback } from 'react'; // useRef 추가
import { BsArrowUpLeft } from 'react-icons/bs';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { dbService } from '../component/body/right/loginfolder/FireBase';
import { Link } from 'react-router-dom';

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
  const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
  const inputRef = useRef<HTMLInputElement>(null); // 검색창을 위한 ref 추가
  const [showAutoSearch, setShowAutoSearch] = useState(false); // AutoSearchContainer 표시 여부를 위한 상태 변수
  const [posts, setPosts] = useState<autoDatas[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(query(collection(dbService, 'Contest'), orderBy('id', 'desc')));
      const data: autoDatas[] = querySnapshot.docs.map(doc => ({
        userId: doc.data().userId,
        id: doc.data().id,
        title: doc.data().title,
        body: doc.data().body,
      }));
      setPosts(data); // "posts" 변수에 데이터 설정
    };

    fetchData();
  }, []);

  const updateData = useCallback(async () => {
    const querySnapshot = await getDocs(query(collection(dbService, 'Contest'), orderBy('id', 'desc')));
    const data: autoDatas[] = querySnapshot.docs.map(doc => ({
      userId: doc.data().userId,
      id: doc.data().id,
      title: doc.data().title,
      body: doc.data().body,
    }));
    const filteredData = data.filter((item: autoDatas) => item.title.includes(keyword)).slice(0, 10);
    setKeyItems(filteredData);
  }, [keyword]); // keyword를 의존성 배열에 추가

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword, updateData]);

  // 검색창 클릭 시 자동완성 결과 보여주기
  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      updateData();
      setShowAutoSearch(true); // 검색창 클릭 시 AutoSearchWrap 표시
    }
  };

  // 검색어 입력 시와 keyItems가 있을 때만 AutoSearchWrap 표시
  useEffect(() => {
    setShowAutoSearch(!!keyword && keyItems.length > 0);
  }, [keyword, keyItems]);

  // AutoSearchWrap 외부 클릭 시 AutoSearchContainer 닫기
  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowAutoSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <SearchBox>
      <SearchInput
        type="search"
        name="search"
        placeholder="검색어를 입력해 주세요"
        theme={theme}
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        onClick={handleSearchClick} // 검색창 클릭 시 자동완성 결과 보여주기
        ref={inputRef} // 검색창에 ref 연결
      />
      <SearchButton>
        <FiSearch />
      </SearchButton>
      {showAutoSearch && ( // showAutoSearch가 true일 때만 AutoSearchWrap 표시
        <AutoSearchContainer>
          <AutoSearchWrap>
            {posts.map(post => (
              <AutoSearchData key={post.id}>
                <AutoSearchLink to={`/contest/${post.id}`}>{post.title}</AutoSearchLink>
                <BsArrowUpLeft />
              </AutoSearchData>
            ))}
          </AutoSearchWrap>
        </AutoSearchContainer>
      )}
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

const AutoSearchWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    right: 10px;
    width: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const AutoSearchLink = styled(Link)`
  color: #242424;
  font-weight: 100;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  width: 230px;
`;
