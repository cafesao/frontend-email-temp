import useStoreEmail from '../../zustand/email'
import copyToClipboard from '../../helpers/copyToClipboard'

function ButtonCopy() {
  const storeEmail = useStoreEmail()
  return (
    <button
      className="btn bg-slate-800 rounded-lg"
      onClick={() => {
        copyToClipboard(storeEmail.emailComplete)
      }}
    >
      Copy
    </button>
  )
}

export default ButtonCopy
