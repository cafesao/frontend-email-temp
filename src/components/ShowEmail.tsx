import useStoreEmail from '../zustand/email'

export default function ShowEmail() {
  const storeEmail = useStoreEmail()

  return (
    <div className="flex flex-row">
      {storeEmail.emailComplete === '' ? (
        <></>
      ) : (
        <>
          <p className="text-green-600 font-bold">{storeEmail.words}</p>
          <p>@{storeEmail.server}</p>
        </>
      )}
    </div>
  )
}
