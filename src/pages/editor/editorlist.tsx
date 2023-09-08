import { editorProposalDTO, mainApiVO } from "../../types/main/mainTypes";
import Spinner from "../../assets/images/spinner.gif";
import { QueryKey, UseQueryOptions, useQueries } from "react-query";
import { getEditorProposal } from "../../apis/mainApi";
import EditorCard from "../../components/editorCard";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
const EditorList = (): JSX.Element => {
  //에디터 리스트 비동기통신으로 조회조건 설정
  const fetchAndSetEditorProposal = async () => {
    const offset = (currentPage - 1) * postsPerPage;
    const data = await getEditorProposal({
      limit: postsPerPage,
      offset: offset,
    });
    return data;
  };

  //조회조건을 가져와 조회한 후 값 가져오기
  const queries: UseQueryOptions<mainApiVO, Error, mainApiVO, QueryKey>[] = [
    {
      queryKey: ["editor", 1],
      queryFn: fetchAndSetEditorProposal,
      staleTime: Infinity,
    },
  ];

  //useQueries hook으로 해당 값들 가져옴.
  const results = useQueries(queries);

  //페이지네이션
  //페이지당 게시물 갯수
  const [postsPerPage, setPostsPerPage] = useState(5);

  //현재 페이지 번호
  const [currentPage, setCurrentPage] = useState(1);

  //게시물 수에 따른 전체 페이지 수 계산
  const totalPages = results[0].data?.totalPages || 0;

  const handlePageClick = (data: { selected: number }) => {
    const selected = data.selected;
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    fetchAndSetEditorProposal();
  }, [currentPage, postsPerPage]);

  return (
    <div className="editorWrapper">
      <div className="editList">
        {results[0].isLoading ? (
          <img src={Spinner} alt="로딩중" width="50%" />
        ) : (
          results[0].data?.results.map((item) => {
            return <EditorCard params={item as editorProposalDTO} />;
          })
        )}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
      />
    </div>
  );
};

export default EditorList;
