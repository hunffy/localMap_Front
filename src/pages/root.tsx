import Header from '../components/header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/*
      <footer>
      <Footer />
    </footer>*/}
    </div>
  )
}

export default Root
