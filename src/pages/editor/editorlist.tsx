import { editorProposalDTO, mainApiVO } from "../../types/main/mainTypes";
import Spinner from "../../assets/images/spinner.gif";
import { QueryKey, UseQueryOptions, useQueries } from "react-query";
import { getEditorProposal } from "../../apis/mainApi";
import EditorCard from "../../components/editorCard";
import PagiNation from "../../components/pagiNation";
import { useState } from "react";
const EditorList = (): JSX.Element => {
  //에디터 리스트 비동기통신으로 조회조건 설정
  // fetchAndSetEditorProposal 함수 수정
  const fetchAndSetEditorProposal = async () => {
    const offset = (currentPage - 1) * postsPerPage + 1;

    const data = await getEditorProposal({
      limit: postsPerPage,
      offset: offset,
    });

    return data;
  };

  // 페이지 네이션
  //페이지 당 게시물 수
  const [postsPerPage, setPostsPerPage] = useState(5);

  //현재 페이지 번호
  const [currentPage, setCurrentPage] = useState(1);

  //현재페이지(currentPage)가 변경될때마다 서버에서 데이터값을 가져오기위한 설정
  const queries: UseQueryOptions<mainApiVO, Error, mainApiVO, QueryKey>[] = [
    {
      queryKey: ["editor", currentPage],
      queryFn: fetchAndSetEditorProposal,
      staleTime: 0,
    },
  ];

  //useQueries hook(여러개의 usequery사용할수있다) 으로 queries설정값 적용
  const results = useQueries(queries);

  //총 페이지수
  const totalPages = results[0].data?.totalPages;

  const currentPosts = results[0].data?.results.map((item, index) => (
    <EditorCard key={index} params={item as editorProposalDTO} />
  ));

  function setPage(page: number) {
    setCurrentPage(page);
  }

  return (
    <div className="editorWrapper">
      <div className="editList">
        {results[0].isLoading ? (
          <img src={Spinner} alt="로딩중" width="50%" />
        ) : (
          currentPosts
        )}
      </div>
      <PagiNation
        totalPosts={results[0].data?.results.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onClickPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default EditorList;
