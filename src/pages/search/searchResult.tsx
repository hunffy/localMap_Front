import ic_menu from "../../assets/images/ic _menu_.svg";
import ic_plus from "../../assets/images/ic_plus.svg";
import MainCard from "../../components/mainCard";
import Loading from "../../components/loading";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { QueryKey, UseQueryOptions, useQueries, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getSearchInfo } from "../../apis/searchApi";
import {
  editorProposalDTO,
  mainApiVO,
  storeInfoDTO,
} from "../../types/main/mainTypes";
import { RootState } from "../../reducers";
import { UserState } from "../../reducers/userReducer";
import StoreCard from "../../components/storecard";
import { useDispatch } from "react-redux";
import { set } from "../../reducers/modalReducer";
import Filter from "../modal/filter";
import { getEditorProposal } from "../../apis/mainApi";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import Spinner from "../../assets/images/spinner.gif";
import marker from "../../assets/images/ic_map_pin.png";
import PagiNation from "../../components/pagiNation";
const SearchResult = () => {
  const params = useParams();
  const userState = useSelector(
    (state: RootState) => state.userReducer as UserState
  );
  const [offset, setOffset] = useState(0);

  //검색결과 조회설정
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

  //검색결과 가져오기
  const { data, isLoading, error, refetch } = useQuery(
    "location",
    fetchAndSetSearchInfo
  );

  //에디터 목록 설정
  const fetchAndSetEditorProposal = async () => {
    const data = await getEditorProposal({
      limit: 5,
      offset: 0,
    });
    return data;
  };

  const queries: UseQueryOptions<mainApiVO, Error, mainApiVO, QueryKey>[] = [
    {
      queryKey: ["editor", 1],
      queryFn: fetchAndSetEditorProposal,
      staleTime: Infinity,
    },
  ];

  const results = useQueries(queries);

  const dispatch = useDispatch();

  const showFilter = () => {
    dispatch(set({ state: "필터모달", cashe1: "캐시1", cashe2: "캐시2" }));
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="searchResultWrapper">
          <div className="srTitleWrapper">
            <p>{params.search} 맛집 인기순</p>
            <img src={ic_menu} onClick={showFilter} />
            <Filter />
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
            <div className="rigthWrapper">
              <Map
                center={{
                  lat: userState.coordinates.lat,
                  lng: userState.coordinates.lng,
                }} // 지도의 중심 좌표
                style={{ width: "51rem", height: "41.3rem" }}
                level={3}
              >
                {data?.results.map((item: storeInfoDTO) => {
                  return (
                    <div>
                      <MapMarker
                        position={{
                          lat: item.latitude,
                          lng: item.longitude,
                        }}
                        image={{
                          src: marker,
                          size: { width: 45, height: 40 },
                          options: { offset: new kakao.maps.Point(20, 32) },
                        }}
                        title={item.name}
                        zIndex={10}
                      />
                      <CustomOverlayMap
                        position={{
                          lat: item.latitude,
                          lng: item.longitude,
                        }}
                        yAnchor={0.8}
                        xAnchor={0.1}
                      >
                        <div className="overlayMarker">
                          <div className="titleWrapper">
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </CustomOverlayMap>
                    </div>
                  );
                })}
              </Map>
              <div className="editCardList">
                {results[0].isLoading ? (
                  <img src={Spinner} alt="로딩중" width="50%" />
                ) : (
                  results[0].data?.results.map((item) => {
                    return <StoreCard params={item as editorProposalDTO} />;
                  })
                )}
              </div>
            </div>
          </div>
          <PagiNation />
        </div>
      )}
    </>
  );
};

export default SearchResult;
