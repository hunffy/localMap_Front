import { set } from "../../reducers/modalReducer";
import { RootState } from "../../reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
const User_nick_check: React.FC = () => {
  const dispatch = useDispatch();
  const modalstate = useSelector((state: RootState) => state.modalReducer);
  const closemodal = () => {
    dispatch(set({ ...modalstate, state: "" }));
  };

  return (
    <div className="user_nick_check_modal">
      <div className="user_nick_check">
        <p>{modalstate.state}</p>
        <div className="nick_chk_btn_wraps">
          <button className="chk_ok_btn">확인</button>
          <button onClick={closemodal} className="chk_cancle_btn">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default User_nick_check;
