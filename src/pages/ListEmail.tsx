import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import useStoreEmail from '../zustand/email'
import useStoreLoading from '../zustand/loading'
import { createTokenEmail, getAllEmail } from '../helpers/fetchData'

function ListEmail() {
  const storeEmail = useStoreEmail()
  const storeLoading = useStoreLoading()
  const navigate = useNavigate()

  async function fetchAllEmail() {
    storeLoading.changeButtonGenerateRefresh(true)
    const emails = await getAllEmail(useStoreEmail.getState().token)
    if (!emails || emails.length === 0) {
      storeLoading.changeButtonGenerateRefresh(false)
      return false
    }
    useStoreEmail.getState().changeEmails(emails)
    storeLoading.changeButtonGenerateRefresh(false)
    return true
  }

  async function createEmail() {
    const token = await createTokenEmail(storeEmail.words)
    if (!token) {
      navigate('/')
      return false
    }
    storeEmail.changeToken(token)
    return true
  }

  useEffect(() => {
    async function asyncFunction() {
      await createEmail()
    }
    if (storeEmail.words === '') {
      navigate('/')
    } else {
      asyncFunction()
      const refreshEmail = setInterval(() => {
        fetchAllEmail()
      }, 10000)

      return () => clearInterval(refreshEmail)
    }
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row p-2 mb-14 space-x-3 bg-slate-800 rounded-lg items-center justify-center ">
          <h1 className="font-bold">{storeEmail.emailComplete}</h1>
          <button
            className="btn bg-slate-800 rounded-lg"
            onClick={() => {
              navigator.clipboard.writeText(storeEmail.emailComplete)
            }}
          >
            Copy
          </button>
        </div>
        {storeEmail.allEmail.length === 0 ? (
          <p className="mb-10">Not Email</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>From</th>
                  <th>Subject</th>
                </tr>
              </thead>
              <tbody>
                {storeEmail.allEmail.map((value, index) => (
                  <tr
                    className="hover"
                    key={uuid()}
                    onClick={() => {
                      navigate(`/viewEmail/${index} `)
                    }}
                  >
                    <th>{index + 1}</th>
                    <td>{value.from}</td>
                    <td>{value.subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex flex-row items-center justify-center space-x-5 mt-20">
          {storeEmail.token === '' ? (
            <>
              <p className="font-bold">Creating email...</p>
            </>
          ) : (
            <>
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
              <button
                className="btn btn-warning"
                onClick={() => {
                  navigate('/')
                }}
              >
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ListEmail
