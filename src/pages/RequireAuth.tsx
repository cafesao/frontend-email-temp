import { Navigate } from 'react-router-dom'

import useStoreAuth from '../zustand/auth'
import path from '../routes/path'

function RequireAuth({ children }: { children: JSX.Element }) {
  const storeAuth = useStoreAuth()

  if (!storeAuth.isAuthenticated) {
    return <Navigate to={path.auth} replace />
  } else {
    return children
  }
}

export default RequireAuth
