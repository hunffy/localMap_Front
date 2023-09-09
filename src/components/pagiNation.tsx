import { PagiNationProps } from "../types/pagination/paginationType";

const PagiNation = ({
  totalPosts,
  postsPerPage,
  currentPage,
  onClickPage,
  totalPages,
}: PagiNationProps) => {
  const numOfPages = totalPages;

  let totalButtons = new Array(numOfPages).fill(null);
  totalButtons = totalButtons.map((_, index) => index + 1);

  return (
    <div className="pagiNationWrapper">
      {totalButtons.map((pageNumber) => (
        <button
          className="pagebtn"
          key={pageNumber}
          onClick={() => onClickPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default PagiNation;
