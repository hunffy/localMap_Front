import logo from '../logo.svg'
import locationIcon from '../assets/images/ic_header_location.svg'
import userBtnIcon from '../assets/images/ic_header_userbtn.svg'

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="logoWrapper">
        <img src={logo} />
      </div>
      <div className="locationWrapper">
        <p>현재 위치: </p>
        <img src={locationIcon} />
        <p>서울시 강남구 도곡1동</p>
      </div>
      <div className="userWrapper">
        <div className="headerButton">
          <img src={userBtnIcon} />
          <p>MyPage</p>
        </div>
        <div className="headerButton">
          <img src={userBtnIcon} />
          <p>Login</p>
        </div>
      </div>
    </div>
  )
}

export default Header
