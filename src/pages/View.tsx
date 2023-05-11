import ReactHtmlParser from 'react-html-parser'
import { useParams, Navigate } from 'react-router-dom'

import useStoreEmail from '../zustand/email'

import path from '../routes/path'

import ButtonBack from '../components/buttons/ButtonBack'

function View() {
  const { index } = useParams()
  const storeEmail = useStoreEmail()

  return (
    <>
      {!index || storeEmail.allEmail.length === 0 ? (
        <Navigate to={path.list} replace />
      ) : (
        <div className="flex flex-col">
          <div className="bg-white p-10 text-black rounded-xl">
            {ReactHtmlParser(storeEmail.allEmail[parseInt(index)].html)}
          </div>
          <div className="flex flex-row items-center justify-center mt-20">
            <ButtonBack path={path.list} />
          </div>
        </div>
      )}
    </>
  )
}

export default View
