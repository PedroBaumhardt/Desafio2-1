import {defineStore} from 'pinia'

export const usePageControl = defineStore('pageControl', () => {
  const result = ref({})
  const resultLen = ref(0)
  const actualPage = ref(0)
  const links = ref({})
  const isActive = ref(false)



  return {result, resultLen, actualPage, links, isActive}
})
