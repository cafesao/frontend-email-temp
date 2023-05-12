import { create } from 'zustand'
import IBodyEmail from '../interface/IBodyEmail'

interface IStoreEmail {
  words: string
  server: string
  emailComplete: string
  allEmail: IBodyEmail[] | []
  token: string
  sha256: string
  changeEmail: (value: string) => void
  changeEmails: (bodyEmail: IBodyEmail[]) => void
  changeToken: (value: string) => void
  changeSha256: (value: string) => void
  default: () => void
}

const storeEmail = create<IStoreEmail>((set) => ({
  words: '',
  server: import.meta.env.VITE_SERVER_EMAIL,
  emailComplete: '',
  allEmail: [],
  token: '',
  sha256: '',
  changeEmail: (words: string) =>
    set((state) => ({
      words,
      emailComplete: `${words}@${state.server}`,
    })),
  changeToken: (value: string) => set(() => ({ token: value })),
  changeEmails: (value: IBodyEmail[]) => set(() => ({ allEmail: value })),
  changeSha256: (value: string) => set(() => ({ sha256: value })),
  default: () =>
    set(() => ({
      words: '',
      emailComplete: '',
      allEmail: [],
      token: '',
      sha256: '',
    })),
}))

export default storeEmail
