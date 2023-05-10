import { useNavigate } from 'react-router-dom'

import useStoreEmail from '../zustand/email'
import useStoreLoading from '../zustand/loading'
import { generateWords } from '../helpers/fetchData'

import ShowEmail from '../components/ShowEmail'

function Home() {
  const storeEmail = useStoreEmail()
  const storeLoading = useStoreLoading()
  const navigate = useNavigate()

  async function generateEmail() {
    storeLoading.changeButtonGenerateWords(true)

    const data = await generateWords()
    storeEmail.changeEmail(`${data[0]}-${data[1]}`)

    storeLoading.changeButtonGenerateWords(false)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <ShowEmail />
        <div className="flex flex-row space-x-5 mt-5">
          <button
            className={
              storeEmail.emailComplete === ''
                ? 'btn btn-disabled'
                : 'btn btn-outline btn-success'
            }
            onClick={async () => {
              navigate('/listEmail')
            }}
          >
            Create Email
          </button>
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

export default Home
