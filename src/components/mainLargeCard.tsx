import '../assets/styles/components/mainLargeCard.scss'
import foodImage from '../assets/images/img_largecard_test.png'
const MainLaggeCard = () => {
  return (
    <div className="largeCardWrapper">
      <section className="leftWrapper">
        <div className="titleWrapper">
          <p className="title">웰빙 샌드위치</p>
          <p className="subText">어쩌구 저쩌구 문구</p>
          <div className="seeMoreButton">
            <p>더보기</p>
          </div>
        </div>
      </section>
      <section className="rightWrapper">
        <img src={foodImage} />
      </section>
    </div>
  )
}
export default MainLaggeCard
