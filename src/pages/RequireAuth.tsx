import useStoreAuth from '../zustand/auth'
import { Navigate } from 'react-router-dom'

function RequireAuth({ children }: { children: JSX.Element }) {
  const storeAuth = useStoreAuth()

  if (!storeAuth.isAuthenticated) {
    return <Navigate to="/auth" replace />
  } else {
    return children
  }
}

export default RequireAuth
