<script setup>

import {useFilterControl} from "@/stores/filterControl.js";
import {useSearchAndLoadControl} from "@/stores/searchAndLoading.js";
import {useSearcher} from "@/stores/searcher.js";
import {usePageControl} from "@/stores/pageControl.js";
import {useToastControl} from "@/stores/toastControl.js";

const filterControl = useFilterControl()
const salControl = useSearchAndLoadControl()
const searcher = useSearcher()
const toastControl = useToastControl()
const pageStore = usePageControl()
const router = useRouter()

const send = () => {
  if(salControl.isLoading || salControl.cooldown) return
  salControl.cooldown = true
  filterControl.page = 1
  const query = filterControl.buildQueryParams()
  router.replace({query: null})
  router.replace({query: query})
  searcher.search(query, salControl, pageStore, toastControl)
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
