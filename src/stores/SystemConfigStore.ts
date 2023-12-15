import { defineStore } from 'pinia'

interface State {
  userList: UserInfo[]
  user: UserInfo | null
  systemConfig: SystemConfig
}

export const useSystemConfigStore = defineStore('systemConfig', {
  state: (): State => {
    return {
      userList: [],
      user: null,
      systemConfig: {
        widthView: '1035 px',
        typeWidth: 'px',
        titleView: '',
        color: '',
        hasSecondNavBar: false,
        background: "url('src/assets/images/backgroundBlueCircle.jpg')"
      },
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
interface SystemConfig {
  widthView: string
  typeWidth: string
  titleView: string
  color: string,
  hasSecondNavBar: boolean
  background: string
}
