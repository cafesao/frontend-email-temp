import useStoreEmail from '../zustand/email'
import useStoreLoading from '../zustand/loading'
import { generateWords } from './fetchData'

export default async function generateEmail() {
  useStoreEmail.getState().default()
  useStoreLoading.getState().changeButtonGenerateWords(true)

  const data = await generateWords()
  useStoreEmail.getState().changeEmail(`${data[0]}-${data[1]}`)

  useStoreLoading.getState().changeButtonGenerateWords(false)
}
