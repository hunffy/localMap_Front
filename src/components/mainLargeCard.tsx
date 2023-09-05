import "../assets/styles/components/mainLargeCard.scss";
import { editorProposalDTO } from "../types/main/mainTypes";
import { useNavigate } from "react-router-dom";
const MainLargeCard = ({ params }: { params: editorProposalDTO }) => {
  const navigate = useNavigate();
  const goEditor = () => {
    navigate("/editorlist", {
      state: { title: params.title, content: params.content, url: params.url },
    });
  };
  return (
    <div className="largeCardWrapper">
      <section className="leftWrapper">
        <div className="titleWrapper">
          <p className="title">{params.title}</p>
          <p className="subText">{params.content}</p>
          <div className="seeMoreButton" onClick={goEditor}>
            <p>더보기</p>
          </div>
        </div>
      </section>
      <section className="rightWrapper">
        <img src={params.url} />
      </section>
    </div>
  );
};
export default MainLargeCard;
