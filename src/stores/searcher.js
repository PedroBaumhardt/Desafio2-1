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

    if (qry.page !== undefined && qry.page > 0) {
      page.value = qry.page
    }

    if (qry.name !== undefined && qry.name !== '') {
      filterName.value = qry.name
    }

    if (qry.status !== undefined && qry.status === 'pending' || qry.status === 'completed') {
      filterStatus.value = qry.status
    }

    if (qry.sortby !== undefined && qry.orderby !== undefined && qry.sortby !== '' && qry.orderby !== '') {
      filterSort.value = qry.sortby
      filterOrder.value = qry.orderby
    }
  }

  const search = (qry, salStore, pageStore) => {
    salStore.startLoading()
    importQueryParams(qry)
    let baseUrl = "https://apis.codante.io/api/orders-api/orders"
    baseUrl += "?page=" + page.value
    if(filterName.value !== '') {
      baseUrl += "&name=" + filterName.value
    }
    if(filterStatus.value !== '') {
      baseUrl += "&status=" + filterStatus.value
    }
    if(filterSort.value !== '') {
      baseUrl += "&sortby=" + filterSort.value
      baseUrl += "&orderby=" + filterOrder.value
    }

    console.log(baseUrl)

    useApi(baseUrl, salStore, pageStore)
  }

  const useApi = (url, sal, pageStore) => {
    axios
      .get(url)
      .then(
        response => {
          console.log(response)
          pageStore.result = response.data.data
          pageStore.resultLen = response.data.meta.last_page
          pageStore.actualPage = response.data.meta.current_page
          pageStore.links = response.data.meta.links
          pageStore.baseLinks = response.data.links
        }
      )
      .finally(() => {
        pageStore.isActive = true
        sal.stopLoading()
        factoryReset()
      })
  }

  return {filterName, filterStatus, filterSort, filterOrder, page, factoryReset, importQueryParams, search, useApi}

})
