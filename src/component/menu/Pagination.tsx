import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Box, Button } from '@mui/material';
import { auth } from '../body/right/loginfolder/FireBase';
import { User } from 'firebase/auth';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  isLoggedIn: boolean;
}

export default function CustomPagination({ postsPerPage, totalPosts, paginate }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    paginate(value);
  };

  const handleWriteClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert('로그인이 필요합니다.');
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Box
      maxWidth="1380px"
      mx="auto"
      mt={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        size="large"
      />
      <Button
        component={Link}
        to={isLoggedIn ? '/writing' : '#'}
        onClick={handleWriteClick}
        variant="contained"
        color="primary"
        sx={{ position: 'absolute', right: 0 }}>
        글쓰기
      </Button>
    </Box>
  );
}
