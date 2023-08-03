import Spinner from '../assets/images/spinner.gif'

const Loading = () => {
  return (
    <div className="loadingWrapper">
      <p>잠시만 기다려 주세요.</p>
      <img src={Spinner} alt="로딩중" width="5%" />
    </div>
  )
}

export default Loading
