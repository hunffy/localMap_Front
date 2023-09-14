import { useState } from "react";
import { RootState } from "../../reducers";
import { set } from "../../reducers/modalReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Map: React.FC = () => {
  const [location, setLocation] = useState(false);
  const modalState = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(set({ ...modalState, state: "" }));
  };
  if (modalState.state === "") return null;
  return (
    <div className="map_modal">
      <div className="map">
        <div className="m_location">
          <input type="text" placeholder="식당 위치 입력" />
        </div>
        <div className="current_map"></div>
        <div className="chk_location">
          <button onClick={closeModal} className="return_btn">
            X
          </button>
          <button
            className="on_location"
            onClick={() => setLocation(!location)}
            style={{ borderColor: location ? "#ffa101" : "gray" }}
          >
            위치 서비스 켜기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
