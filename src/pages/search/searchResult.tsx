import { useParams } from 'react-router-dom'
import ic_menu from '../../assets/images/ic _menu_.svg'
import ic_plus from '../../assets/images/ic_plus.svg'
import { getSearchInfo } from '../../apis/searchApi'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { UserState } from '../../reducers/userReducer'
import { useQuery } from 'react-query'
import MainCard from '../../components/mainCard'
import { storeInfoDTO } from '../../types/main/mainTypes'
import { useState } from 'react'
import Loading from '../../components/loading'

const SearchResult = () => {
  const params = useParams()
  const userState = useSelector(
    (state: RootState) => state.userReducer as UserState
  )
  const [offset, setOffset] = useState(0)
  const showFilter = () => {
    alert('aa')
  }

  const fetchAndSetSearchInfo = async () => {
    const data = await getSearchInfo({
      category: '',
      sort_by: '',
      latitude: userState.coordinates.lat,
      longitude: userState.coordinates.lng,
      search: params.search!,
      limit: 8,
      offset: offset
    })
    return data
  }

  const { data, isLoading, error, refetch } = useQuery(
    'location',
    fetchAndSetSearchInfo
  )

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="searchResultWrapper">
          <div className="srTitleWrapper">
            <p>{params.search} 맛집 인기순</p>
            <img src={ic_menu} onClick={showFilter} />
          </div>
          <div className="regWrapper">
            <div className="titleWrapper">
              <p>식당 등록</p>
              <img src={ic_plus} />
            </div>
          </div>
          <div className="contentWrapper">
            <div className="leftWrapper">
              {data?.results.map((item: storeInfoDTO) => {
                return <MainCard params={item} />
              })}
            </div>
            <div className="rigthWrapper"></div>
          </div>
          <div className="pagiNationWrapper"></div>
        </div>
      )}
    </>
  )
}

export default SearchResult
