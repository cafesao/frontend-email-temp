import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import ListEmail from './pages/ListEmail.tsx'
import './main.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound.tsx'

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
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
