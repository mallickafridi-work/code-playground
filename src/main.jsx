import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Node from './pages/Node.jsx'
import UsersProfilePage from './pages/UsersProfilePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <div>Error 404 - Page Not Found</div>
  },
  {
    path: '/Node',
    element: <Node />,
    errorElement: <div>Error 404 - Page Not Found</div>
  },
  {
    path: '/:userId',
    element: <UsersProfilePage />,
    errorElement: <div>Error 404 - Page Not Found</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
