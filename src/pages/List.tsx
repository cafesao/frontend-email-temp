import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useStoreEmail from '../zustand/email'

import fetchAllEmail from '../helpers/fetchAllEmail'
import createEmail from '../helpers/createEmail'

import path from '../routes/path'

import Table from '../components/Table'
import ButtonRefresh from '../components/buttons/ButtonRefresh'
import ButtonBack from '../components/buttons/ButtonBack'
import ButtonCopy from '../components/buttons/ButtonCopy'

function List() {
  const storeEmail = useStoreEmail()
  const navigate = useNavigate()

  useEffect(() => {
    async function asyncFunction() {
      await createEmail(navigate)
    }
    if (storeEmail.words === '') {
      navigate(path.home)
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
        <div className="flex flex-row p-2 mb-14 space-x-3 bg-slate-800 rounded-lg items-center justify-center">
          <h1 className="font-bold">{storeEmail.emailComplete}</h1>
          <ButtonCopy />
        </div>
        {storeEmail.allEmail.length === 0 ? (
          <p className="mb-10">Not Email</p>
        ) : (
          <Table />
        )}
        <div className="flex flex-row items-center justify-center space-x-5 mt-20">
          {storeEmail.token === '' ? (
            <>
              <p className="font-bold">Creating email...</p>
            </>
          ) : (
            <>
              <ButtonRefresh />
              <ButtonBack path={path.home} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default List
