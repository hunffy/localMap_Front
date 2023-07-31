import locationIcon from '../../assets/images/ic_header_search.svg'
import searchIcon from '../../assets/images/ic_main_search.svg'
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
      </section>
    </div>
  )
}

export default Main
