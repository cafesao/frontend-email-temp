import useStoreLoading from '../zustand/loading'
import useStoreEmail from '../zustand/email'

import { getAllEmail } from './fetchData'

export default async function fetchAllEmail() {
  useStoreLoading.getState().changeButtonGenerateRefresh(true)
  const emails = await getAllEmail()
  if (emails === true) {
    useStoreLoading.getState().changeButtonGenerateRefresh(false)
    return true
  }
  if (!emails || emails.data.length === 0) {
    useStoreLoading.getState().changeButtonGenerateRefresh(false)
    return false
  }
  useStoreEmail.getState().changeEmails(emails.data)
  useStoreLoading.getState().changeButtonGenerateRefresh(false)
  return true
}
