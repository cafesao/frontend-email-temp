import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import useStoreEmail from '../zustand/email'
import path from '../routes/path'

function Table() {
  const storeEmail = useStoreEmail()
  const navigate = useNavigate()

  return (
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
                navigate(`${path.view.split(':')[0]}${index}`)
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
  )
}

export default Table
