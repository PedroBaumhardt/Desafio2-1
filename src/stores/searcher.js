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

    if (qry.page !== undefined) {
      page.value = qry.page
    }
    if (qry.name !== undefined) {
      filterName.value = qry.name
    }
    if (qry.status !== undefined && qry.status == 'pending' || qry.status == 'completed') {
      filterStatus.value = qry.status
    }
    if (qry.sortby !== undefined && qry.orderby !== undefined) {
      filterSort.value = qry.sortby
      filterOrder.value = qry.orderby
    }
  }

  const search = (qry, salStore, pageStore) => {
    salStore.startLoading()
    importQueryParams(qry)
    let baseUrl = "https://apis.codante.io/api/orders-api"
    baseUrl += "?page=" + page.value
    if(filterName.value !== '') {
      baseUrl += "&name=" + filterName.value
    }
    if(filterStatus.value !== 'no') {
      baseUrl += "&status=" + filterStatus.value
    }
    if(filterSort.value !== 'no') {
      baseUrl += "&sortby=" + filterSort.value
      baseUrl += "&orderby=" + filterOrder.value
    }

    useApi(baseUrl, salStore, pageStore)
  }

  const useApi = (url, sal, pageStore) => {
    axios
      .get(url)
      .then(
        response => {
          pageStore.resultLen = response.data
          pageStore.resultLen = response.meta.last_page
          pageStore.actualPage = response.meta.current_page
          pageStore.links = response.meta.links
        }
      )
      .finally(() => {
        pageStore.isActive = true
        sal.stopLoading()
      })
  }

  return {filterName, filterStatus, filterSort, filterOrder, page, factoryReset, importQueryParams, search, useApi}

})
