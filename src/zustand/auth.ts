import { create } from 'zustand'

interface IStoreAuth {
  isAuthenticated: boolean
  changeIsAuthenticated: (status: boolean) => void
}

const storeAuth = create<IStoreAuth>((set) => ({
  isAuthenticated: false,
  changeIsAuthenticated: (status: boolean) =>
    set(() => ({ isAuthenticated: status })),
}))

export default storeAuth
