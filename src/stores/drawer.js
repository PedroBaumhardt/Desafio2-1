import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', () => {

  const isOpen = ref(false)
  const isHidden = ref(true)

  const openDrawer = () => {
    isHidden.value = false
    setTimeout(() => {
      isOpen.value = true
    },0)
  }

  const closeDrawer = () => {
    isOpen.value = false
    setTimeout(() => {
      isHidden.value = true
    }, 401)
  }

  return {isOpen, isHidden, openDrawer, closeDrawer}
})
