<template>
  <MyDrawer />
  <MyTable />
</template>

<script setup>
  //
  import MyDrawer from '@/components/Drawer/MyDrawer.vue';
  import {useFilterControl} from "@/stores/filterControl.js";

  const filterControl = useFilterControl()
  const router = useRouter()
  const route = useRoute()

  onMounted(() => {
    if (route.query.page === undefined) {
      router.push({
        query: {}
      })
      return
    }
    filterControl.importQueryParams(route.query)
  })
</script>
