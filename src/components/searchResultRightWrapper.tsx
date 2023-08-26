import { QueryKey, UseQueryOptions, useQueries } from "react-query";
import { mainApiVO } from "../types/main/mainTypes";
import { getNearLocalStore } from "../apis/mainApi";
import { RootState } from "../reducers";
import { UserState } from "../reducers/userReducer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getEditorProposal } from "../apis/mainApi";
import { getEventLocalStore } from "../apis/mainApi";
import Spinner from "../assets/images/spinner.gif";
import MainLaggeCard from "./mainLargeCard";
import { editorProposalDTO } from "../types/main/mainTypes";
import MainSeeMoreButton from "./mainSeeMoreButton";
const SearchResultRightWrapper = () => {
  const userState = useSelector(
    (state: RootState) => state.userReducer as UserState
  );
  const fetchAndSetNearStore = async () => {
    const data = await getNearLocalStore({
      category: "",
      sort_by: "",
      latitude: userState.coordinates.lat,
      longitude: userState.coordinates.lng,
      limit: 4,
      offset: 1,
    });
    return data;
  };

  const fetchAndSetEventStore = async () => {
    const data = await getEventLocalStore({
      category: "",
      sort_by: "",
      latitude: userState.coordinates.lat,
      longitude: userState.coordinates.lng,
      limit: 4,
      offset: 1,
    });
    return data;
  };

  const fetchAndSetEditorProposal = async () => {
    const data = await getEditorProposal({
      limit: 4,
      offset: 0,
    });
    return data;
  };
  const queries: UseQueryOptions<mainApiVO, Error, mainApiVO, QueryKey>[] = [
    {
      queryKey: ["near", 1],
      queryFn: fetchAndSetNearStore,
      staleTime: Infinity,
    },
    {
      queryKey: ["event", 2],
      queryFn: fetchAndSetEventStore,
      staleTime: Infinity,
    },
    {
      queryKey: ["editor", 3],
      queryFn: fetchAndSetEditorProposal,
      staleTime: Infinity,
    },
  ];

  const results = useQueries(queries);
  return (
    <div className="RightWrapper">
      <p className="mainTitle">에디터 특집</p>
      <div className="editCardList">
        {results[2].isLoading ? (
          <img src={Spinner} alt="로딩중" width="50%" />
        ) : (
          results[2].data?.results.map((item) => {
            return <MainLaggeCard params={item as editorProposalDTO} />;
          })
        )}
      </div>
      <MainSeeMoreButton />
    </div>
  );
};

export default SearchResultRightWrapper;
