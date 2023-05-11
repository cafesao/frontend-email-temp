import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import routes from './routes/routes'

import './main.css'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
