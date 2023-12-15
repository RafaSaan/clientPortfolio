import { defineStore } from 'pinia'

interface State {
  userList: UserInfo[]
  user: UserInfo | null
  systemConfig: SystemConfig | null
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      userList: [],
      user: null,
      systemConfig: null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
interface SystemConfig {
  name: string
  age: number
  color: string
}