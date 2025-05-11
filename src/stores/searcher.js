import axios from "axios";
import {defineStore} from 'pinia'

export const useSearcher = defineStore('searcher', () => {

  const filterName = ref('')
  const filterStatus = ref('')
  const filterSort = ref('')
  const filterOrder = ref('')
  const page = ref(-1)



  const factoryReset = () => {
    filterName.value = ''
    filterStatus.value = ''
    filterSort.value = ''
    filterOrder.value = ''
    page.value = -1
  }

  const importQueryParams = (qry = {}) => {

    if (!qry || typeof qry !== 'object') {
      return
    }

    page.value = qry.page

    if (qry.search !== undefined && qry.search !== '') {
      filterName.value = qry.search
    }

    if (qry.status !== undefined && qry.status === 'pending' || qry.status === 'completed') {
      filterStatus.value = qry.status
    }

    if (qry.sortby !== undefined && qry.orderby !== undefined && qry.sortby !== '' && qry.orderby !== '') {
      filterSort.value = qry.sortby
      filterOrder.value = qry.orderby
    }
  }

  const search = (qry, salStore, pageStore, toast = null) => {
    salStore.startLoading()
    importQueryParams(qry)
    let baseUrl = "https://apis.codante.io/api/orders-api/orders"
    baseUrl += "?page=" + page.value
    if(filterName.value !== '') {
      baseUrl += "&search=" + filterName.value
    }
    if(filterStatus.value !== '') {
      baseUrl += "&status=" + filterStatus.value
    }
    if(filterSort.value !== '') {
      baseUrl += "&sort="
      if(filterOrder.value === 'desc'){
        baseUrl += "-"
      }
      baseUrl += filterSort.value
    }

    useApi(baseUrl, salStore, pageStore, toast)
  }

  const useApi = (url, sal, pageStore, toast) => {
    console.log(url)
    axios
      .get(url)
      .then(
        response => {
          pageStore.result = response.data.data
          pageStore.resultLen = response.data.meta.last_page
          pageStore.actualPage = response.data.meta.current_page
          pageStore.links = response.data.meta.links
          pageStore.baseLinks = response.data.links
          pageStore.isActive = true
          if (toast !== null) toast.openToast()
        }
      )
      .catch((error) => {
        console.log(error)
        toast.openToast(true)
      })
      .finally(() => {
        sal.stopLoading()
        factoryReset()
        setTimeout(() => {
          sal.cooldown = false
        }, 3000)
      })
  }

  return {filterName, filterStatus, filterSort, filterOrder, page, factoryReset, importQueryParams, search, useApi}

})
