<template>
  <MyDrawer />
  <MyTable />
</template>

<script setup>
  //
  import MyDrawer from '@/components/Drawer/MyDrawer.vue';
  import {useFilterControl} from "@/stores/filterControl.js";
  import {useSearcher} from "@/stores/searcher.js";
  import {useSearchAndLoadControl} from "@/stores/searchAndLoading.js";
  import {usePageControl} from "@/stores/pageControl.js";

  const searcher = useSearcher()
  const filterControl = useFilterControl()
  const router = useRouter()
  const route = useRoute()
  const salStore = useSearchAndLoadControl()
  const pageStore = usePageControl()

  onMounted(() => {
    if (route.query.page === undefined || route.query.page === null || route.query.page <= 0) {
      router.push({
        query: {}
      })
      return
    }
    let qry = filterControl.importQueryParams(route.query)
    if  (qry !== -1) {
      searcher.search(qry, salStore, pageStore)
    }
  })
</script>
