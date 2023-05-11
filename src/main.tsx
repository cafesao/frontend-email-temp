import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import ListEmail from './pages/ListEmail.tsx'
import './main.css'

import NotFound from './pages/NotFound.tsx'
import ViewEmail from './pages/ViewEmail.tsx'
import Auth from './pages/Auth.tsx'
import RequireAuth from './pages/RequireAuth.tsx'

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
    errorElement: <NotFound />,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/listEmail',
    element: (
      <RequireAuth>
        <ListEmail />
      </RequireAuth>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/viewEmail/:index',
    element: (
      <RequireAuth>
        <ViewEmail />
      </RequireAuth>
    ),
    errorElement: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
