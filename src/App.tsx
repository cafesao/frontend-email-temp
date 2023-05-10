import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import useStoreEmail from './zustand/email'
import useStoreLoading from './zustand/loading'
import { generateWords } from './helpers/fetchData'

function App() {
  const storeEmail = useStoreEmail()
  const storeLoading = useStoreLoading()

  async function generateEmail() {
    storeLoading.changeButtonGenerateWords(true)

    const data = await generateWords()
    storeEmail.changeEmail(`${data[0]}-${data[1]}`)

    storeLoading.changeButtonGenerateWords(false)
  }

  useEffect(() => {
    generateEmail()
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
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
        <div className="flex flex-row space-x-5 mt-5">
          <button className="btn btn-outline btn-success">Create Email</button>
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
        </div>
      </div>
    </>
  )
}

export default App
