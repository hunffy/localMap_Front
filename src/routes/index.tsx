import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/main/main'
import Root from '../pages/root'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <Main /> }]
  }
])
