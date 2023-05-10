import { create } from 'zustand'
import IBodyEmail from '../interface/IBodyEmail'

interface IStoreEmail {
  words: string
  server: string
  emailComplete: string
  allEmail: IBodyEmail[] | []
  changeEmail: (value: string) => void
  clearEmail: () => void
  addBodyInArray: (bodyEmail: IBodyEmail) => void
  clearBodyInArray: () => void
}

const storeEmail = create<IStoreEmail>((set) => ({
  words: '',
  server: import.meta.env.VITE_SERVER_EMAIL,
  emailComplete: '',
  allEmail: [],
  changeEmail: (words: string) =>
    set((state) => ({
      words,
      emailComplete: `${words}@${state.server}`,
    })),
  clearEmail: () => set(() => ({ words: '', emailComplete: '' })),
  addBodyInArray: (bodyEmail: IBodyEmail) =>
    set((state) => ({ allEmail: [...state.allEmail, bodyEmail] })),
  clearBodyInArray: () => set(() => ({ allEmail: [] })),
}))

export default storeEmail
