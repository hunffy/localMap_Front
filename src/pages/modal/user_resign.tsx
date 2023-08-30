import { useDispatch } from "react-redux";
import { set } from "../../reducers/modalReducer";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux/es/hooks/useSelector";
const User_resign: React.FC = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modalReducer);

  const closeModal = () => {
    dispatch(set({ ...modalState, state: "" }));
  };

  if (modalState.state === "") return null;
  return (
    <div className="modal">
      <div className="user_resign">
        <header className="user_resign_tit">
          <span>회원탈퇴</span>
          <p>~ 님 탈퇴 하시겠습니까?</p>
        </header>
        <section className="resign_btn_wraps">
          <button className="u_resign_btn">탈퇴</button>
          <button onClick={closeModal} className="u_cancle_btn">
            취소
          </button>
        </section>
      </div>
    </div>
  );
};

export default User_resign;
