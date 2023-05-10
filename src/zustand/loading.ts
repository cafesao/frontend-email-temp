import { create } from 'zustand'

interface IStoreLoading {
  buttonGenerateWords: boolean
  buttonGenerateEmail: boolean
  changeButtonGenerateWords: (status: boolean) => void
  changeButtonGenerateEmail: (status: boolean) => void
}

const storeLoading = create<IStoreLoading>((set) => ({
  buttonGenerateWords: false,
  buttonGenerateEmail: false,
  changeButtonGenerateWords: (status: boolean) =>
    set(() => ({ buttonGenerateWords: status })),
  changeButtonGenerateEmail: (status: boolean) =>
    set(() => ({ buttonGenerateEmail: status })),
}))

export default storeLoading
