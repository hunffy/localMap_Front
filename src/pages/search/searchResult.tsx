import ic_menu from "../../assets/images/ic _menu_.svg";
import ic_plus from "../../assets/images/ic_plus.svg";
import MainCard from "../../components/mainCard";
import Loading from "../../components/loading";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getSearchInfo } from "../../apis/searchApi";
import { storeInfoDTO } from "../../types/main/mainTypes";
import { RootState } from "../../reducers";
import { UserState } from "../../reducers/userReducer";
import SearchResultRightWrapper from "../../components/searchResultRightWrapper";

const SearchResult = () => {
  const params = useParams();
  const userState = useSelector(
    (state: RootState) => state.userReducer as UserState
  );
  const [offset, setOffset] = useState(0);
  const showFilter = () => {
    alert("aa");
  };

  const fetchAndSetSearchInfo = async () => {
    const data = await getSearchInfo({
      category: "",
      sort_by: "",
      latitude: userState.coordinates.lat,
      longitude: userState.coordinates.lng,
      search: params.search!,
      limit: 8,
      offset: offset,
    });
    return data;
  };

  const { data, isLoading, error, refetch } = useQuery(
    "location",
    fetchAndSetSearchInfo
  );

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
                return <MainCard params={item} />;
              })}
            </div>
            <SearchResultRightWrapper />
          </div>
          <div className="pagiNationWrapper"></div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
