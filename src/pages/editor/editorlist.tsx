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
    const offset = (currentPage - 1) * postsPerPage;

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

  //조회조건을 가져와 조회한 후 값 가져오기
  const queries: UseQueryOptions<mainApiVO, Error, mainApiVO, QueryKey>[] = [
    {
      queryKey: ["editor", currentPage],
      queryFn: fetchAndSetEditorProposal,
      staleTime: 0,
    },
  ];

  //useQueries hook으로 해당 값들 가져옴.
  const results = useQueries(queries);

  //총 페이지수
  const totalPages = results[0].data?.totalPages;

  //현재 페이지의 첫번째 게시물 인덱스번호
  const p_offset = (currentPage - 1) * postsPerPage;

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
