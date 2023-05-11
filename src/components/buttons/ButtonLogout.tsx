import { useNavigate } from 'react-router-dom'

import useStoreAuth from '../../zustand/auth'
import path from '../../routes/path'

function ButtonLogout() {
  const navigate = useNavigate()
  const storeAuth = useStoreAuth()

  function handleLogout() {
    storeAuth.changeIsAuthenticated(false)
    navigate(path.auth)
  }

  return (
    <button className="btn btn-warning" onClick={handleLogout}>
      Logout
    </button>
  )
}

export default ButtonLogout
