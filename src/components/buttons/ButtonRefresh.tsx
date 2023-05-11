import useStoreLoading from '../../zustand/loading'

import fetchAllEmail from '../../helpers/fetchAllEmail'

function ButtonRefresh() {
  const storeLoading = useStoreLoading()

  return (
    <button
      className={
        !storeLoading.buttonGenerateRefresh
          ? 'btn btn-primary'
          : 'btn btn-primary loading'
      }
      onClick={fetchAllEmail}
    >
      Refresh
    </button>
  )
}

export default ButtonRefresh
