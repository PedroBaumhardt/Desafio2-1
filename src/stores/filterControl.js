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
      qry.search = filterName.value
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
      return -1;
    }

    if (qry.page !== undefined && qry.page > 0) {
      page.value = qry.page
    }

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

    return buildQueryParams()
  }

  return {page, filterName, filterStatus, filterSort, filterOrder, buildQueryParams, importQueryParams}

})
