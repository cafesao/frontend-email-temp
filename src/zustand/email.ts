import { create } from 'zustand'
import IBodyEmail from '../interface/IBodyEmail'

interface IStoreEmail {
  words: string
  server: string
  emailComplete: string
  allEmail: IBodyEmail[] | []
  token: string
  changeEmail: (value: string) => void
  changeEmails: (bodyEmail: IBodyEmail[]) => void
  changeToken: (value: string) => void
  default: () => void
}

const storeEmail = create<IStoreEmail>((set) => ({
  words: '',
  server: import.meta.env.VITE_SERVER_EMAIL,
  emailComplete: '',
  allEmail: [],
  token: '',
  changeEmail: (words: string) =>
    set((state) => ({
      words,
      emailComplete: `${words}@${state.server}`,
    })),
  changeToken: (value: string) => set(() => ({ token: value })),
  changeEmails: (value: IBodyEmail[]) => set(() => ({ allEmail: value })),
  default: () =>
    set(() => ({
      words: '',
      emailComplete: '',
      allEmail: [],
      token: '',
    })),
}))

export default storeEmail
