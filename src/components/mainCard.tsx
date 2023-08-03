import storeImg from '../assets/images/img_main_store.png'
import starIcon from '../assets/images/ic_card_star.svg'
import { storeInfoDTO } from '../types/main/mainTypes'

const MainCard = ({ params }: { params: storeInfoDTO }) => {
  return (
    <div className="cardWrapper">
      <img className="contentImage" src={params.most_recent_photo_url} />
      <div className="storeInfoWrapper">
        <img className="storeIcon" src={storeImg} />
        <div className="info">
          <p className="title">{params.name}</p>
          <div className="interestInfo">
            <img className="starIcon" src={starIcon} />
            <p className="count">{params.view}</p>
          </div>
        </div>
      </div>
      <div className="locationFood">
        <p>
          {params.address} - {params.category_name}
        </p>
      </div>
    </div>
  )
}

export default MainCard
