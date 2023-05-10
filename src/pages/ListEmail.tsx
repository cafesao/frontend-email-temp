import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import useStoreEmail from '../zustand/email'
import useStoreLoading from '../zustand/loading'

function ListEmail() {
  const storeEmail = useStoreEmail()
  const navigate = useNavigate()

  useEffect(() => {
    if (storeEmail.token === '') {
      navigate('/')
    }
  }, [])

  //Good, now, get email each 10 seconds or click in button

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold">{storeEmail.emailComplete}</h1>
        {storeEmail.allEmail.length === 0 ? (
          <p>Not Email</p>
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
                  <tr className="hover">
                    <th>{index + 1}</th>
                    <td>{value.from}</td>
                    <td>{value.subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default ListEmail
