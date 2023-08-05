const Login = (): JSX.Element => {
  return (
    <div className="loginWrapper">
      <div className="title">
        <p>로그인 및 회원가입</p>
      </div>
      <input type="text" placeholder="이메일" />
      <input type="text" placeholder="비밀번호" />
      <p className="findPW">비밀번호 찾기</p>
      <div className="btnWrapper">
        <div className="basicBtn">
          <p>로그인</p>
        </div>
        <div className="basicBtn">
          <p>비즈니스 계정으로 로그인</p>
        </div>
      </div>
      <div className="joinWrapper">
        <p>아직 회원이 아니신가요?</p>
        <p>회원가입을 하시면 더많은 정보와 혜택을 받으실 수 있습니다.</p>
        <div className="joinBtn">
          <p>회원가입</p>
        </div>
      </div>
      <div className="joinWrapper">
        <p>혹시 사장님이신가요?</p>
        <p>
          비즈 계정을 통해 회원가입을 하시면 본인 식당 관리를 할 수 있습니다.
        </p>
        <div className="joinBtn">
          <p>비즈 회원가입</p>
        </div>
      </div>
    </div>
  )
}

export default Login
