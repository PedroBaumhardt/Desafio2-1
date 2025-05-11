import {defineStore} from 'pinia'

export const useToastControl = defineStore('toastControl', () => {

  const isOpen = ref(false)
  const isSuccess = ref(true)

  const openToast = (error = false) => {

    isSuccess.value = !error
    isOpen.value = true

    setTimeout(() => {
      isOpen.value = false
    }, 1000)

  }

  const closeToast = () => {
    isOpen.value = false
  }

  return {isOpen, isSuccess, openToast, closeToast}
})
