import { create } from 'zustand'

interface IStoreLoading {
  buttonGenerateWords: boolean
  buttonGenerateEmail: boolean
  buttonGenerateRefresh: boolean
  changeButtonGenerateWords: (status: boolean) => void
  changeButtonGenerateEmail: (status: boolean) => void
  changeButtonGenerateRefresh: (status: boolean) => void
}

const storeLoading = create<IStoreLoading>((set) => ({
  buttonGenerateWords: false,
  buttonGenerateEmail: false,
  buttonGenerateRefresh: false,
  changeButtonGenerateWords: (status: boolean) =>
    set(() => ({ buttonGenerateWords: status })),
  changeButtonGenerateEmail: (status: boolean) =>
    set(() => ({ buttonGenerateEmail: status })),
  changeButtonGenerateRefresh: (status: boolean) =>
    set(() => ({ buttonGenerateRefresh: status })),
}))

export default storeLoading
