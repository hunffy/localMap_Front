import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { set } from "../../reducers/modalReducer";
import { RootState } from "../../reducers";

const Column_delete: React.FC = () => {
  const modalState = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(set({ ...modalState, state: "" }));
  };

  if (modalState.state === "") return null;

  return (
    <div className="c_d_modal_container">
      <div className="column_delete">
        <header className="column_delete_tit">
          <span>{modalState.state}</span>
          <p>컬럼을 삭제하시겠습니까?</p>
        </header>
        <section className="column_delete_btn_wraps">
          <button className="c_delete_btn">삭제</button>
          <button onClick={closeModal} className="c_cancle_btn">
            취소
          </button>
        </section>
      </div>
    </div>
  );
};

export default Column_delete;
