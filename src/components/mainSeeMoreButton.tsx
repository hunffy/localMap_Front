import { useNavigate } from "react-router-dom";

const MainSeeMoreButton = () => {
  const navigate = useNavigate();

  const goEditorList = () => {
    navigate("/editorlist");
  };
  return (
    <div className="seeMoreButton" onClick={goEditorList}>
      <p>더보기</p>
    </div>
  );
};

export default MainSeeMoreButton;
