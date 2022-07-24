import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { store } from './states'
import './styles/index.scss'
import App from 'routes'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
