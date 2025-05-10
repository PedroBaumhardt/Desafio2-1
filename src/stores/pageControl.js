import {defineStore} from 'pinia'

export const usePageControl = defineStore('pageControl', () => {
  const result = ref({})
  const resultLen = ref(0)
  const actualPage = ref(0)
  const isActive = ref(false)

  const goToPage = (qry, searcher, sal, self) => {
    searcher.search(qry, searcher, sal, self)
  }

  return {result, resultLen, actualPage, isActive, goToPage}
})
