import { set } from "../../reducers/modalReducer";
import { useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Event_delete: React.FC = () => {
  const modalstate = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const closemodal = () => {
    dispatch(set({ ...modalstate, state: "" }));
  };

  if (modalstate.state === "") return null;
  return (
    <div className="e_d_modal">
      <div className="event_delete">
        <header className="event_delete_tit">
          <span>이벤트 삭제</span>
          <p>~ 이벤트를 삭제하시겠습니까?</p>
        </header>
        <section className="event_delete_btn_wraps">
          <button className="e_delete_btn">삭제</button>
          <button onClick={closemodal} className="e_cancle_btn">
            취소
          </button>
        </section>
      </div>
    </div>
  );
};

export default Event_delete;
