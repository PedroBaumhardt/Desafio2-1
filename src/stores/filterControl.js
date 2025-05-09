import { defineStore } from 'pinia'

export const useFilterControl = defineStore('filterControl', () => {

  const filterName = ref('')
  const filterStatus = ref('no')
  const filterSort = ref('no')
  const filterOrder = ref('asc')
  const page = ref(1)

  const buildQueryParams = () => {
    let qry = {
      page: page.value,
    }

    if(filterName.value !== '') {
      qry.name = filterName.value
    }
    if(filterStatus.value !== 'no') {
      qry.status = filterStatus.value
    }
    if(filterSort.value !== 'no') {
      qry.sortby = filterSort.value
      qry.orderby = filterOrder.value
    }

    return qry
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
    if (qry.status !== undefined && qry.status === 'pending' || qry.status === 'completed') {
      filterStatus.value = qry.status
    }
    if (qry.sortby !== undefined && qry.orderby !== undefined) {
      filterSort.value = qry.sortby
      filterOrder.value = qry.orderby
    }

  }

  return {page, filterName, filterStatus, filterSort, filterOrder, buildQueryParams, importQueryParams}

})
