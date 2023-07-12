export default function JoinLonin() {
  return (
    <form>
      <h1>회원가입</h1>
      <div>
        email : <input type="email" />
      </div>
      <div>
        password : <input type="password" />
      </div>
      <button type="submit">회원가입하기</button>
      <button>로그인하러가기</button>
    </form>
  );
}
