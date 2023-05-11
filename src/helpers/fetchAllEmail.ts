import useStoreLoading from '../zustand/loading'
import useStoreEmail from '../zustand/email'

import { getAllEmail } from './fetchData'

export default async function fetchAllEmail() {
  useStoreLoading.getState().changeButtonGenerateRefresh(true)
  const emails = await getAllEmail(useStoreEmail.getState().token)
  if (!emails || emails.length === 0) {
    useStoreLoading.getState().changeButtonGenerateRefresh(false)
    return false
  }
  useStoreEmail.getState().changeEmails(emails)
  useStoreLoading.getState().changeButtonGenerateRefresh(false)
  return true
}
