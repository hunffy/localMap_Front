import '../assets/styles/components/mainLargeCard.scss'
import { editorProposalDTO } from '../types/main/mainTypes'

const MainLaggeCard = ({ params }: { params: editorProposalDTO }) => {
  return (
    <div className="largeCardWrapper">
      <section className="leftWrapper">
        <div className="titleWrapper">
          <p className="title">{params.title}</p>
          <p className="subText">{params.content}</p>
          <div className="seeMoreButton">
            <p>더보기</p>
          </div>
        </div>
      </section>
      <section className="rightWrapper">
        <img src={params.url} />
      </section>
    </div>
  )
}
export default MainLaggeCard
