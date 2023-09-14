import { editorProposalDTO } from "../types/main/mainTypes";
const EditorCard = ({ params }: { params: editorProposalDTO }) => {
  return (
    <div className="editorcard">
      <section className="res_column_list">
        <section className="res_column">
          <section className="column_img">
            <ul>
              <li>
                <img src={params.url}></img>
              </li>
            </ul>
          </section>
          <section className="column_info">
            <div className="columnist_info">
              <strong>{params.title}</strong>
              <span>조회수:{params.view}</span>
            </div>
            <div className="column_tit">
              <strong>[맛잘알] '십고초려'는 기본, 꼭 가봐야한다.</strong>
            </div>
            <div className="column_detail">
              <p>{params.content}</p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default EditorCard;
