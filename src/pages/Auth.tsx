import { useState } from 'react'
import useStoreAuth from '../zustand/auth'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const storeAuth = useStoreAuth()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')

  function verifyPassword() {
    if (password === import.meta.env.VITE_KEY) {
      storeAuth.changeIsAuthenticated(true)
      navigate('/')
      return true
    } else {
      alert('Password wrong')
      return false
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <input
        type="password"
        className="input input-bordered w-full max-w-xs"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
        onKeyDown={(event) =>
          event.key === 'Enter' ? verifyPassword() : false
        }
      />
      <button className="btn btn-success" onClick={verifyPassword}>
        Login
      </button>
    </div>
  )
}

export default Auth
