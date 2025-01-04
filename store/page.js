import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => {
    return {
        namespace: '',
        title: ''
    }
  },
  actions: {
    setNamespace(ns) {
        this.namespace = ns
    },
    setTitle(t) {
        this.title = t
    }
  },
})