import generateEmail from '../../helpers/generateEmail'
import useStoreLoading from '../../zustand/loading'

function ButtonGenerateWords() {
  const storeLoading = useStoreLoading()

  return (
    <button
      className={
        storeLoading.buttonGenerateWords
          ? 'btn btn-outline loading'
          : 'btn btn-outline'
      }
      onClick={generateEmail}
    >
      Generate Words
    </button>
  )
}

export default ButtonGenerateWords
