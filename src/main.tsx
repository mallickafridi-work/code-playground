import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App.jsx'
import PeoplePage from './pages/People.jsx'
import UsersProfilePage from './pages/UsersProfilePage.jsx'
import FakeAPI from './pages/FakeAPI.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error 404 - Page Not Found</div>
  },
  {
    path: '/People',
    element: <PeoplePage />,
    errorElement: <div>Error 404 - Page Not Found</div>
  },
  {
    path: '/FakeAPI',
    element: <FakeAPI />,
    errorElement: <div>Error 404 - Page Not Found</div>
  },
  {
    path: '/:userId',
    element: <UsersProfilePage />,
    errorElement: <div>Error 404 - Page Not Found</div>
  }
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
