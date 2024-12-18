//Main component

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

const App = () => {

  return <RouterProvider router={router} />
}

export default App

/*
COMMENTS:
<Route path='/' element={<MainLayout />}> is a parent
route to the rest of our routes so any routes we put in
<Route index element={ <HomePage /> } /> are then going to use
the MainLayout. So in the MainLayout, whatever route we are on,
that page is going to come thru the Outlet, which is a natural
component

<Route path='*' element={<NotFoundPage />} />
This is saying that any page that is not found is
going to show the NotFoundPage, the * is a catch-all
*/