import { set } from "../../reducers/modalReducer";
import { useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Review_delete: React.FC = () => {
  const modalstate = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(set({ ...modalstate, state: "" }));
  };

  if (modalstate.state === "") return null;

  return (
    <div className="modal_r_delete">
      <div className="review_delete">
        <header className="review_delete_tit">
          <span>리뷰 삭제</span>
          <p>리뷰를 삭제하시겠습니까?</p>
        </header>
        <section className="review_delete_btn_wraps">
          <button className="r_delete_btn">삭제</button>
          <button onClick={closeModal} className="r_cancle_btn">
            취소
          </button>
        </section>
      </div>
    </div>
  );
};

export default Review_delete;
