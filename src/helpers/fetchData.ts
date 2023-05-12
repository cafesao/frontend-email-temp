import IBodyEmail from '../interface/IBodyEmail'
import useStoreEmail from '../zustand/email'

import axios from 'axios'

async function getAllEmail(): Promise<
  { data: IBodyEmail[]; sha256: string } | boolean
> {
  try {
    const sha256 = useStoreEmail.getState().sha256
    const fetch = await axios.get(
      sha256 !== ''
        ? `${
            import.meta.env.VITE_URL_API_EMAIL
          }/get?sha256=${encodeURIComponent(sha256)}`
        : `${import.meta.env.VITE_URL_API_EMAIL}/get`,
      {
        headers: {
          authorization: 'Bearer ' + useStoreEmail.getState().token,
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(fetch)
    if (fetch.status === 304) {
      return true
    } else {
      useStoreEmail.getState().changeSha256(fetch.data.sha256)
      return fetch.data
    }
  } catch (error: any) {
    if (error.response.status === 404) {
      return false
    }
    console.error(error)
    return false
  }
}

async function createTokenEmail(email: string): Promise<string | false> {
  try {
    const fetch = (
      await axios.post(`${import.meta.env.VITE_URL_API_EMAIL}/create`, {
        email: email + '@' + import.meta.env.VITE_SERVER_EMAIL,
      })
    ).data.data
    return fetch
  } catch (error) {
    console.error(error)
    return false
  }
}

async function generateWords() {
  try {
    const fetch = (await axios.get(import.meta.env.VITE_URL_API_WORDS)).data
    return fetch
  } catch (error) {
    console.error(error)
    return false
  }
}

export { getAllEmail, createTokenEmail, generateWords }
