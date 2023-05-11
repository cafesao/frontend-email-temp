import { useNavigate } from 'react-router-dom'

import useStoreEmail from '../zustand/email'
import useStoreLoading from '../zustand/loading'
import useStoreAuth from '../zustand/auth'

import { generateWords } from '../helpers/fetchData'

import ShowEmail from '../components/ShowEmail'

function Home() {
  const storeEmail = useStoreEmail()
  const storeLoading = useStoreLoading()
  const storeAuth = useStoreAuth()
  const navigate = useNavigate()

  async function generateEmail() {
    storeEmail.default()
    storeLoading.changeButtonGenerateWords(true)

    const data = await generateWords()
    storeEmail.changeEmail(`${data[0]}-${data[1]}`)

    storeLoading.changeButtonGenerateWords(false)
  }

  function handleLogout() {
    storeAuth.changeIsAuthenticated(false)
    navigate('/auth')
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
        <div className="flex flex-col mt-32">
          <button className="btn btn-warning" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
