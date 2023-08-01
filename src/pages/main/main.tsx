import locationIcon from '../../assets/images/ic_header_search.svg'
import searchIcon from '../../assets/images/ic_main_search.svg'
import MainCard from '../../components/mainCard'
const Main = (): JSX.Element => {
  return (
    <div className="mainWrapper">
      <section className="sloganSection">
        <div className="leftWrapper">
          <p className="titleSlogan">원하는 슬로건</p>
          <p className="subTitleSlogan">원하는 부제</p>
          <div className="searchWrapper">
            <div className="search">
              <img src={locationIcon} />
              <input type="text" />
            </div>
            <div className="searchButton">
              <img src={searchIcon} />
              <p>검색</p>
            </div>
          </div>
        </div>
        <div className="rightWrapper"></div>
      </section>
      <section className="mainContentWrapper">
        <div className="localHotStoreWrapper">
          <p className="mainTitle">주변 인기맛집(거리순으로)</p>
          <div className="storeCardList">
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
          </div>
          <div className="seeMoreButton">
            <p>더보기</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
