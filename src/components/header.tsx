import logo from '../logo.svg'
import locationIcon from '../assets/images/ic_header_location.svg'
import userBtnIcon from '../assets/images/ic_header_userbtn.svg'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../reducers'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()

  const userAddress = useSelector(
    (state: RootState) => state.userReducer.address
  )
  const accessToken = useSelector(
    (state: RootState) => state.userReducer.tokens.accessToken
  )
  const refreshToken = useSelector(
    (state: RootState) => state.userReducer.tokens.refreshToken
  )

  const goLogin = () => {
    navigate('/login')
  }

  const goMain = () => {
    navigate('/')
  }

  const goLogout = () => {
    alert('logout')
  }

  const loginBTN = () => {
    return (
      <>
        {accessToken === '' && refreshToken === '' ? (
          <div className="headerButton" onClick={goLogin}>
            <img src={userBtnIcon} />
            <p>Login</p>
          </div>
        ) : (
          <div className="headerButton" onClick={goLogout}>
            <img src={userBtnIcon} />
            <p>LogOut</p>
          </div>
        )}
      </>
    )
  }

  return (
    <div className="headerWrapper">
      <div className="logoWrapper" onClick={goMain}>
        <img src={logo} />
      </div>
      <div className="locationWrapper">
        <p>현재 위치: </p>
        <img src={locationIcon} />
        <p>{userAddress}</p>
      </div>
      <div className="userWrapper">
        <div className="headerButton">
          <img src={userBtnIcon} />
          <p>MyPage</p>
        </div>
        {loginBTN()}
      </div>
    </div>
  )
}

export default Header
