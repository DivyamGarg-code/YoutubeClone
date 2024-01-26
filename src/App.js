import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux'
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultsPage from './components/SearchResultsPage';
import { Analytics } from '@vercel/analytics/react'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/search_results",
        element: <SearchResultsPage />
      },
    ]
  },
])
function App() {
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
      <Analytics mode={'production'} />
    </>
  );
}

export default App;
