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

  return {page, filterName, filterStatus, filterSort, filterOrder, buildQueryParams}

})
