import { useEffect, useState } from 'react';
import { auth } from './FireBase';
import { GoogleAuthProvider, User, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import styled, { StyleSheetManager } from 'styled-components';
import MyLogin from './MyLogin';

interface LoginSectionProps {
  darkMode: boolean;
}

export default function Login() {
  const [value, setValue] = useState<User | null>(null);

  const handleClick = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider)
      .then(data => {
        setValue(data.user);
        localStorage.setItem('email', JSON.stringify(data.user)); // JSON 형식으로 저장
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const isDarkMode = true;

  useEffect(() => {
    const emailData = localStorage.getItem('email');
    if (emailData) {
      try {
        const userObj: User = JSON.parse(emailData);
        setValue(userObj);
      } catch (error) {
        console.error('JSON parsing error:', error);
        // JSON 파싱에 실패한 경우, 로컬 스토리지의 값을 삭제하거나 다른 처리를 수행할 수 있음
      }
    }
  }, []);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.email || !values.password) {
      setErrorMsg('모든 항목을 입력해주세요.');
      return;
    }
    setErrorMsg('');

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async res => {
        setSubmitButtonDisabled(false);

        console.log('가입 성공:', res.user);
      })

      .catch(err => {
        setSubmitButtonDisabled(false);
        setErrorMsg('오류가 발생했습니다: ' + err.message);
      });
  };

  const handleRegularLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      setValue(userCredential.user);
      localStorage.setItem('email', JSON.stringify(userCredential.user));
      console.log('일반 로그인 성공:', userCredential.user);
    } catch (err) {
      setErrorMsg('오류가 발생했습니다: ' + err.message);
    }
  };

  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'darkMode'}>
      <LoginSection darkMode={isDarkMode}>
        {!value ? (
          <>
            <LoginArea>
              <LoginForm onSubmit={handleSubmission}>
                <InputDiv>
                  <LoginInput type="email" name="email" placeholder="아이디" onChange={handleChange} />
                  <LoginInput type="password" name="password" placeholder="비밀번호" onChange={handleChange} />{' '}
                </InputDiv>
                <LoginButtonArea>
                  <LoginButton type="button" onClick={handleRegularLogin} disabled={submitButtonDisabled}>
                    로그인
                  </LoginButton>
                </LoginButtonArea>
                <Error>{errorMsg}</Error>
              </LoginForm>
            </LoginArea>
            <SocialLink onClick={handleClick}>Google로 시작하기</SocialLink>
          </>
        ) : (
          <MyLogin />
        )}
        {!value && (
          <LoginInfo>
            <IdLink>아이디 찾기</IdLink>
            <PwsLink>비밀번호 찾기</PwsLink>
            <JoinLink to="/join-login">회원가입하기</JoinLink>
          </LoginInfo>
        )}
      </LoginSection>
    </StyleSheetManager>
  );
}

const LoginSection = styled.section<LoginSectionProps>`
  width: 435px;
  height: auto;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 21px 20px 18px;
  line-height: 20px;
  text-align: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const LoginLink = styled(Link)`
//   cursor: pointer;
//   margin: 0 auto;
//   width: 80%;
//   margin-top: 13px;
//   padding: 17px 0;
//   border: 1px solid;
//   display: block;
//   color: #fff;
//   font-size: 18px;
//   font-weight: bold;
//   border-radius: 4px;
//   background-color: #41b6e6;
//   text-decoration: none;

//   &:hover {
//     text-decoration: none;
//   }
// `;

const SocialLink = styled.button`
  cursor: pointer;
  margin: 0 auto;
  width: 80%;
  margin-top: 13px;
  padding: 10px 0;
  border: 1px solid;
  display: block;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  background-color: #a9a9a9;
`;

const LoginInfo = styled.div`
  margin-top: 16px;
  font-size: 1.3rem;
  text-align: center;
`;

const IdLink = styled.a`
  cursor: pointer;
  font-size: 13px;
`;

const PwsLink = styled.a`
  cursor: pointer;
  font-size: 13px;

  &::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #a9a9a9;
    margin: 4px 12px 0;
  }
`;

const JoinLink = styled(Link)`
  cursor: pointer;
  font-size: 13px;
  color: #242424;
  font-weight: 700;

  &::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #a9a9a9;
    margin: 4px 12px 0;
  }
`;

/** 로그인 부분*/
const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginInput = styled.input`
  background-color: #fff;
  padding: 5px 15px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #d3d3d3;
  outline: none;
  width: 80%;
  height: 20px;

  &:focus {
    border-color: #808080;
  }
`;

const LoginButtonArea = styled.div`
  /* display: flex;
  align-items: center; */
`;

const Error = styled.b`
  font-size: 12px;
  color: red;
  text-align: left;
`;

const LoginButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: #1e8ec7;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding: 20px 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #1e8ec7;
  transition: 100ms;

  &:hover {
    background-color: #41b6e6;
    border: 1px solid #41b6e6;
  }
  &:disabled {
    background-color: gray !important;
    border: 1px solid gray !important;
  }
`;
