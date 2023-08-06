import logo from '../logo.svg'
import locationIcon from '../assets/images/ic_header_location.svg'
import userBtnIcon from '../assets/images/ic_header_userbtn.svg'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../reducers'
import { useSelector } from 'react-redux'
import { getLocationInfo } from '../apis/mainApi'
import { useQuery } from 'react-query'

const Header = () => {
  const navigate = useNavigate()

  const goLogin = () => {
    navigate('/login')
  }

  const currentLocation = useSelector(
    (state: RootState) => state.userReducer.coordinates
  )

  const fetchAndSetLocationInfo = async () => {
    const data = await getLocationInfo({
      latitude: currentLocation.lat,
      longitude: currentLocation.lng,
      radius: 10
    })
    return data
  }

  const { data, isLoading, error } = useQuery(
    'location',
    fetchAndSetLocationInfo
  )

  return (
    <div className="headerWrapper">
      <div className="logoWrapper">
        <img src={logo} />
      </div>
      <div className="locationWrapper">
        <p>현재 위치: </p>
        <img src={locationIcon} />
        {isLoading ? <p></p> : <p>{data[0].adm_nm}</p>}
      </div>
      <div className="userWrapper">
        <div className="headerButton">
          <img src={userBtnIcon} />
          <p>MyPage</p>
        </div>
        <div className="headerButton" onClick={goLogin}>
          <img src={userBtnIcon} />
          <p>Login</p>
        </div>
      </div>
    </div>
  )
}

export default Header
