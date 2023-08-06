import locationIcon from '../../assets/images/ic_header_search.svg'
import searchIcon from '../../assets/images/ic_main_search.svg'
import MainCard from '../../components/mainCard'
import MainLaggeCard from '../../components/mainLargeCard'
import { getEventLocalStore, getNearLocalStore } from '../../apis/mainApi'
import { storeInfoDTO, storeInfoVO } from '../../types/main/mainTypes'
import { QueryKey, UseQueryOptions, useQueries } from 'react-query'
import Spinner from '../../assets/images/spinner.gif'
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import marker from '../../assets/images/ic_map_pin.png'
import { useState } from 'react'

const Main = (): JSX.Element => {
  const currentLocation = useSelector(
    (state: RootState) => state.userReducer.coordinates
  )

  const [isHover, setHover] = useState(false)

  const fetchAndSetNearStore = async () => {
    const data = await getNearLocalStore({
      category: '',
      sort_by: '',
      //latitude: currentLocation.lat,
      //longitude: currentLocation.lng
      latitude: null,
      longitude: null,
      limit: 4,
      offset: 1
    })
    return data
  }

  const fetchAndSetEventStore = async () => {
    const data = await getEventLocalStore({
      category: '',
      sort_by: '',
      //latitude: currentLocation.lat,
      //longitude: currentLocation.lng
      latitude: null,
      longitude: null,
      limit: 4,
      offset: 1
    })
    return data
  }

  const queries: UseQueryOptions<storeInfoVO, Error, storeInfoVO, QueryKey>[] =
    [
      {
        queryKey: ['near', 1],
        queryFn: fetchAndSetNearStore,
        staleTime: Infinity
      },
      {
        queryKey: ['event', 2],
        queryFn: fetchAndSetEventStore,
        staleTime: Infinity
      }
    ]

  const results = useQueries(queries)

  const onMarkerHover = () => {
    setHover(true)
  }

  const onMarkerHoverOut = () => {
    setHover(false)
  }

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
        <div className="rightWrapper">
          <Map
            center={{ lat: currentLocation.lat, lng: currentLocation.lng }} // 지도의 중심 좌표
            style={{ width: '51rem', height: '41.3rem' }}
            level={3}
          >
            <MapMarker
              position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
              image={{
                src: marker,
                size: { width: 45, height: 40 },
                options: { offset: new kakao.maps.Point(20, 32) }
              }}
              title="aaaa"
              onMouseOver={onMarkerHover}
              onMouseOut={onMarkerHoverOut}
              zIndex={10}
            />
            {isHover ? (
              <CustomOverlayMap
                position={{
                  lat: currentLocation.lat,
                  lng: currentLocation.lng
                }}
                yAnchor={0.8}
                xAnchor={0.1}
              >
                <div className="overlayMarker">
                  <div className="titleWrapper">
                    <p>Here!asdfasdfasdf</p>
                  </div>
                </div>
              </CustomOverlayMap>
            ) : (
              <div />
            )}
          </Map>
        </div>
      </section>
      <section className="mainContentWrapper">
        <div className="StoreWrapper">
          <p className="mainTitle">주변 인기맛집</p>
          <div className="storeCardList">
            {results[0].isLoading ? (
              <img src={Spinner} alt="로딩중" width="50%" />
            ) : (
              results[0].data?.results.map((item) => {
                return <MainCard params={item as storeInfoDTO} />
              })
            )}
          </div>
          <div className="seeMoreButton">
            <p>더보기</p>
          </div>
        </div>
        <div className="StoreWrapper">
          <p className="mainTitle">이벤트 중인 맛집</p>
          <div className="storeCardList">
            {results[1].isLoading ? (
              <img src={Spinner} alt="로딩중" width="50%" />
            ) : (
              results[1].data?.results.map((item) => {
                return <MainCard params={item as storeInfoDTO} />
              })
            )}
          </div>
          <div className="seeMoreButton">
            <p>더보기</p>
          </div>
        </div>
        <div className="StoreWrapper">
          <p className="mainTitle">에디터 특집</p>
          <div className="editCardList">
            <MainLaggeCard />
            <MainLaggeCard />
            <MainLaggeCard />
            <MainLaggeCard />
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
