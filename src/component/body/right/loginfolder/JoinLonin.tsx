import { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from './FireBase';

export default function JoinLogin() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setErrorMsg('');
      const createdUser = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      // console.log(createdUser);
      setRegisterEmail('');
      setRegisterPassword('');
    } catch (err: any) {
      // console.log(err.code);
      switch (err.code) {
        case 'auth/weak-password':
          setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
          break;
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다');
          break;
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입되어 있는 계정입니다');
          break;
        default:
          setErrorMsg('오류가 발생했습니다');
          break;
      }
    }
  };

  return (
    <form onSubmit={register}>
      <h1>회원가입</h1>
      <div>
        email:{' '}
        <input type="email" name="email" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} />
      </div>
      <div>
        password:{' '}
        <input
          type="password"
          name="password"
          value={registerPassword}
          onChange={e => setRegisterPassword(e.target.value)}
        />
      </div>
      {errorMsg && <div>{errorMsg}</div>}
      <button type="submit">회원가입하기</button>
      <button>로그인하러가기</button>
    </form>
  );
}
