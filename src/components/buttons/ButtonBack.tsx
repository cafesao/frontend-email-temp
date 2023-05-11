import { useNavigate } from 'react-router-dom'

function ButtonBack(params: { path: string }) {
  const navigate = useNavigate()

  return (
    <button
      className="btn btn-warning"
      onClick={() => {
        navigate(params.path)
      }}
    >
      Back
    </button>
  )
}

export default ButtonBack
