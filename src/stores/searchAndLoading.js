import { defineStore } from 'pinia'

export const useSearchAndLoadControl = defineStore('searchAndLoading', () => {

  const isLoading = ref(false)
  const cooldown = ref(false)

  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  return {isLoading, cooldown, startLoading, stopLoading}
})
