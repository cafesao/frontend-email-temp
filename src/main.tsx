import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import ListEmail from './pages/ListEmail.tsx'
import './main.css'

import NotFound from './pages/NotFound.tsx'
import ViewEmail from './pages/ViewEmail.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/listEmail',
    element: <ListEmail />,
    errorElement: <NotFound />,
  },
  {
    path: '/viewEmail/:index',
    element: <ViewEmail />,
    errorElement: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
