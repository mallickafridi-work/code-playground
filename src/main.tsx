import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import PeoplePage from './pages/PeoplePage.js'
import UsersProfilePage from './pages/UsersProfilePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <div>Error 404 - Page Not Found</div>
  },
  {
    path: '/PeoplePage',
    element: <PeoplePage />,
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
