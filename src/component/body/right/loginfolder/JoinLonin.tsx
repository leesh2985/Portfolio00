import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from './FireBase';
import { Button, Input } from '@chakra-ui/react';

export default function JoinLonin() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    // date: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const [erroerMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.name || !values.email || !values.password || !values.passwordConfirm) {
      setErrorMsg('모든 항목을 입력해주세요.');
      return;
    }
    setErrorMsg('');

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async res => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate('/');
        console.log('가입 성공:', user);
      })
      .catch(err => {
        setSubmitButtonDisabled(false);
        if (err.code === 'auth/email-already-in-use') {
          setErrorMsg('이미 사용 중인 이메일입니다.');
        } else if (err.code === 'auth/invalid-email') {
          setErrorMsg('유효하지 않은 이메일 형식입니다.');
        } else if (err.code === 'auth/weak-password') {
          setErrorMsg('비밀번호는 6자 이상이어야 합니다.');
        } else {
          setErrorMsg('오류가 발생했습니다: ' + err.message);
        }
      });
  };

  return (
    <JoinLoninContainer>
      <LogoArea>
        <Logo to="/">
          <LogoImg src="/img/logo.png" alt="로고" />
        </Logo>
      </LogoArea>
      <form onSubmit={handleSubmission}>
        <JoinLoninArea>
          <Input
            type="text"
            name="name"
            placeholder="이름(실명)"
            onChange={handleChange}
            fontSize="18px"
            px="15px"
            py="20px"
            minW="480px"
            borderRadius="4px"
            border="1px solid #d3d3d3"
            _focus={{ borderColor: '#808080' }}
            mx="auto"
            bg="white"
          />

          <Input
            type="email"
            name="email"
            placeholder="아이디"
            onChange={handleChange}
            fontSize="18px"
            px="15px"
            py="20px"
            minW="480px"
            borderRadius="4px"
            border="1px solid #d3d3d3"
            _focus={{ borderColor: '#808080' }}
            mx="auto"
            bg="white"
          />

          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
            fontSize="18px"
            px="15px"
            py="20px"
            minW="480px"
            borderRadius="4px"
            border="1px solid #d3d3d3"
            _focus={{ borderColor: '#808080' }}
            mx="auto"
            bg="white"
          />

          <Input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호확인"
            onChange={handleChange}
            fontSize="18px"
            px="15px"
            py="20px"
            minW="480px"
            borderRadius="4px"
            border="1px solid #d3d3d3"
            _focus={{ borderColor: '#808080' }}
            mx="auto"
            bg="white"
          />
          <LoginButtonArea>
            <Error>{erroerMsg}</Error>
            <Button
              type="submit"
              isDisabled={submitButtonDisabled}
              fontWeight="bold"
              fontSize="18px"
              padding="20px 15px"
              minW="512px"
              borderRadius="4px"
              bg="#1e8ec7"
              color="#fff"
              border="1px solid #1e8ec7"
              cursor="pointer"
              _hover={{ bg: '#41b6e6', borderColor: '#41b6e6' }}
              _disabled={{
                bg: 'gray',
                borderColor: 'gray',
                cursor: 'not-allowed',
                _hover: {
                  bg: 'gray',
                  borderColor: 'gray',
                },
              }}>
              가입하기
            </Button>
          </LoginButtonArea>
        </JoinLoninArea>
      </form>
    </JoinLoninContainer>
  );
}

const JoinLoninContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1380px;
  margin: 0 auto;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;
  height: auto;
`;

const Logo = styled(Link)`
  cursor: pointer;
  width: 300px;
`;

const LogoImg = styled.img`
  width: 200px;
  margin-top: 50px;
`;

const JoinLoninArea = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;

  &:nth-child(2) {
  }
`;

const LoginButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Error = styled.b`
  font-weight: bold;
  font-size: 14px;
  color: red;
  margin-bottom: 30px;
`;
