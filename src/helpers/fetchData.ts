import IBodyEmail from '../interface/IBodyEmail'
import axios from 'axios'

async function getAllEmail(token: string): Promise<IBodyEmail[] | [] | false> {
  try {
    return (
      await axios.get(`${import.meta.env.VITE_URL_API_EMAIL}/get`, {
        headers: {
          authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      })
    ).data
  } catch (error) {
    console.error(error)
    return false
  }
}

async function createTokenEmail(email: string): Promise<string | false> {
  try {
    return (
      await axios.post(`${import.meta.env.VITE_URL_API_EMAIL}/create`, {
        email: email + '@' + import.meta.env.VITE_SERVER_EMAIL,
      })
    ).data.data
  } catch (error) {
    console.error(error)
    return false
  }
}

async function generateWords() {
  try {
    return (await axios.get(import.meta.env.VITE_URL_API_WORDS)).data
  } catch (error) {
    console.error(error)
    return false
  }
}

export { getAllEmail, createTokenEmail, generateWords }
