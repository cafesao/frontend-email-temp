import { NavigateFunction } from 'react-router-dom'
import useStoreEmail from '../zustand/email'
import { createTokenEmail } from './fetchData'
import path from '../routes/path'

export default async function createEmail(navigate: NavigateFunction) {
  const token = await createTokenEmail(useStoreEmail.getState().words)
  if (!token) {
    navigate(path.home)
    return false
  }
  useStoreEmail.getState().changeToken(token)
  return true
}
