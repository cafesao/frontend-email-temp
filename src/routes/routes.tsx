import { RouteObject } from 'react-router-dom'

import path from './path.ts'

import Home from '../pages/Home.tsx'
import List from '../pages/List.tsx'
import NotFound from '../pages/NotFound.tsx'
import View from '../pages/View.tsx'
import Auth from '../pages/Auth.tsx'
import RequireAuth from '../pages/RequireAuth.tsx'

const routes: RouteObject[] = [
  {
    path: path.auth,
    element: <Auth />,
    errorElement: <NotFound />,
  },
  {
    path: path.home,
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
    errorElement: <NotFound />,
  },
  {
    path: path.list,
    element: (
      <RequireAuth>
        <List />
      </RequireAuth>
    ),
    errorElement: <NotFound />,
  },
  {
    path: path.view,
    element: (
      <RequireAuth>
        <View />
      </RequireAuth>
    ),
    errorElement: <NotFound />,
  },
]

export default routes
