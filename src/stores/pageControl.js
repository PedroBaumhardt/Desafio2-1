import {defineStore} from 'pinia'

export const usePageControl = defineStore('pageControl', () => {
  const result = ref({})
  const resultLen = ref(0)
  const actualPage = ref(0)
  const links = ref({})
  const baseLinks = ref({})
  const isActive = ref(false)


  const getLinkByPage = (page) => {
    let tgt = links.find(link => link.label === page.toString())
    return tgt.url
  }


  return {result, resultLen, actualPage, links, isActive, baseLinks, getLinkByPage}
})
