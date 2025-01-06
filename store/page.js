import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => {
    return {
        data: {
          document: {
            isDoc: false,
            namespace: '',
            title: '',
            forceShowNamespace: false
          },
        },
        title: '',
        viewName: '',
    }
  },
  actions: {
    setDocNamespace(ns) {
        this.data.document.namespace = ns
    },
    setDocTitle(t) {
        this.data.document.title = t
    },
    setTitle(t) {
      this.title = t
    },
    setViewName(vn) {
      this.viewName = vn
    },
    setIsDoc(isDoc) {
      this.data.document.isDoc = isDoc;
    },
    setForceShowNamespace(tf) {
      this.data.document.forceShowNamespace = tf;
    } 
  },
})