import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import useGeoLocation from './hooks/useGeolocation'
import Loading from './components/loading'
import { getLocationInfo } from './apis/mainApi'
import { useDispatch } from 'react-redux'
import { addressSet } from './reducers/userReducer'
import { useEffect, useState } from 'react'

const App = () => {
  const location = useGeoLocation()
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)

  const fetchAndSetLocationInfo = async () => {
    const data = await getLocationInfo({
      latitude: location.coordinates?.lat as number,
      longitude: location.coordinates?.lng as number,
      radius: 10
    })
    if (data.length > 0) {
      dispatch(addressSet(data[0].adm_nm))
      setLoading(true)
    }
    return data
  }

  useEffect(() => {
    fetchAndSetLocationInfo()
  }, [location.loaded])

  return (
    <div>
      {location.loaded && isLoading ? (
        <RouterProvider router={router} />
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default App
