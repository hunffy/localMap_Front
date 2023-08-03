import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import useGeoLocation from './hooks/useGeolocation'
import Loading from './components/loading'

const App = () => {
  const location = useGeoLocation()

  return (
    <div>
      {location.loaded ? <RouterProvider router={router} /> : <Loading />}
    </div>
  )
}

export default App
