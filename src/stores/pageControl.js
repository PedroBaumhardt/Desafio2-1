import {defineStore} from 'pinia'

export const usePageControl = defineStore('pageControl', () => {
  const currentPage = ref(1)

  return {currentPage}
})
