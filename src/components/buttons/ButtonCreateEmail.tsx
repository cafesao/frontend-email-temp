import { useNavigate } from 'react-router-dom'

import path from '../../routes/path'
import useStoreEmail from '../../zustand/email'

function ButtonCreateEmail() {
  const navigate = useNavigate()
  const storeEmail = useStoreEmail()

  return (
    <button
      className={
        storeEmail.emailComplete === ''
          ? 'btn btn-disabled'
          : 'btn btn-outline btn-success'
      }
      onClick={async () => {
        navigate(path.list)
      }}
    >
      Create Email
    </button>
  )
}

export default ButtonCreateEmail
