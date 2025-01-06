import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => {
    return {
        skin: ''
    }
  },
  actions: {
    setSkin(con) {
        this.skin = con
    }
  },
})