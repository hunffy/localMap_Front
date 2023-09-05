import { editorProposalDTO, mainApiVO } from "../../types/main/mainTypes";
import Spinner from "../../assets/images/spinner.gif";
import { QueryKey, UseQueryOptions, useQueries } from "react-query";
import { getEditorProposal } from "../../apis/mainApi";
import MainLargeCard from "../../components/mainLargeCard";
const EditorList = (): JSX.Element => {
  const fetchAndSetEditorProposal = async () => {
    const data = await getEditorProposal({
      limit: 6,
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
  return (
    <div className="editorWrapper">
      <div className="editList">
        {results[0].isLoading ? (
          <img src={Spinner} alt="로딩중" width="50%" />
        ) : (
          results[0].data?.results.map((item) => {
            return <MainLargeCard params={item as editorProposalDTO} />;
          })
        )}
      </div>
    </div>
  );
};

export default EditorList;
