import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/styles/index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = createStore(rootReducer, composeWithDevTools())
const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
