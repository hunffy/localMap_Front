import M_Choose_food from "./m_choose_food";
import { useState } from "react";
import { set } from "../../reducers/modalReducer";
import { useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Filter: React.FC = () => {
  /*클릭시 평점순/인기순*/
  const [score, setScore] = useState(false);
  const [favorite, setFavorite] = useState(false);

  /**/
  const modalState = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(set({ ...modalState, state: "" }));
  };
  if (modalState.state === "") return null;
  return (
    <div className="filter_modal">
      <div className="filter">
        <h1>{modalState.state}</h1>
        <div className="chk_wraps">
          <button
            className="score_btn"
            onClick={() => setScore(!score)}
            style={{ borderColor: score ? "#ffa101" : "gray" }}
          >
            평점순
          </button>
          <button
            className="favorite_btn"
            onClick={() => setFavorite(!favorite)}
            style={{ borderColor: favorite ? "#ffa101" : "gray" }}
          >
            인기순
          </button>
        </div>
        <M_Choose_food />
        <div className="f_btn_wraps">
          <button onClick={closeModal} className="f_cancle_btn">
            취소
          </button>
          <button className="f_ok_btn">확인</button>
        </div>
      </div>
    </div>
  );
};
export default Filter;
