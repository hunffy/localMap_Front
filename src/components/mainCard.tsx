import contentImg from '../assets/images/img_main_test.png'
import storeImg from '../assets/images/img_main_store.png'
import starIcon from '../assets/images/ic_card_star.svg'
const MainCard = () => {
  return (
    <div className="cardWrapper">
      <img className="contentImage" src={contentImg} />
      <div className="storeInfoWrapper">
        <img className="storeIcon" src={storeImg} />
        <div className="info">
          <p className="title">음식점이름</p>
          <div className="interestInfo">
            <img className="starIcon" src={starIcon} />
            <p className="count">46</p>
          </div>
        </div>
      </div>
      <div className="locationFood">
        <p>위치 - 음식종류표시</p>
      </div>
    </div>
  )
}

export default MainCard
