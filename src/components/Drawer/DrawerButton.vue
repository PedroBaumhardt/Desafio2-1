<script setup>

import {useFilterControl} from "@/stores/filterControl.js";
import {useSearchAndLoadControl} from "@/stores/searchAndLoading.js";
import {useSearcher} from "@/stores/searcher.js";
import {usePageControl} from "@/stores/pageControl.js";

const filterControl = useFilterControl()
const salControl = useSearchAndLoadControl()
const searcher = useSearcher()
const pageStore = usePageControl()
const router = useRouter()

const send = () => {
  if(salControl.isLoading) return
  const query = filterControl.buildQueryParams()
  router.push({query: query})
  searcher.search(query, salControl, pageStore)
}

</script>

<template>

  <div class="button-container">
    <v-btn block @click="send" :loading="salControl.isLoading">ENVIAR</v-btn>
  </div>

</template>

<style scoped>

  .button-container{
    width: 80%;
    align-self: center;
  }

</style>
