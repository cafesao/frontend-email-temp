import { useParams, useNavigate } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

import useStoreEmail from '../zustand/email'
import { useEffect } from 'react'

function ViewEmail() {
  const { index } = useParams()
  const storeEmail = useStoreEmail()
  const navigate = useNavigate()

  useEffect(() => {
    if (!index || storeEmail.allEmail.length === 0) {
      navigate('/listEmail')
    }
  }, [storeEmail.allEmail])
  return (
    <>
      {!index || storeEmail.allEmail.length === 0 ? (
        <></>
      ) : (
        <div className="flex flex-col">
          <div className="bg-white p-10 text-black rounded-xl">
            {ReactHtmlParser(storeEmail.allEmail[parseInt(index)].html)}
          </div>
          <div className="flex flex-row items-center justify-center mt-20">
            <button
              className="btn btn-warning"
              onClick={() => {
                navigate('/listEmail')
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ViewEmail
