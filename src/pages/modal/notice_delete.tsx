import { set } from "../../reducers/modalReducer";
import { useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux";
const Notice_delete: React.FC = () => {
  const modalState = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const closemodal = () => {
    dispatch(set({ ...modalState, state: "" }));
  };

  if (modalState.state === "") return null;
  return (
    <div className="modal_notice">
      <div className="notice_delete">
        <header className="notice_delete_tit">
          <span>공지사항 삭제</span>
          <p>~ 공지사항을 삭제하시겠습니까?</p>
        </header>
        <section className="notice_delete_btn_wraps">
          <button className="n_delete_btn">삭제</button>
          <button onClick={closemodal} className="n_cancle_btn">
            취소
          </button>
        </section>
      </div>
    </div>
  );
};

export default Notice_delete;
