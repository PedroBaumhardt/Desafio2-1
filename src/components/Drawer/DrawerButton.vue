<script setup>

import {useFilterControl} from "@/stores/filterControl.js";
import {useSearchAndLoadControl} from "@/stores/searchAndLoading.js";

const filterControl = useFilterControl()
const salControl = useSearchAndLoadControl()
const searcher = useSearcher()
const router = useRouter()

const send = () => {
  if(salControl.isLoading) return
  router.push({query: filterControl.buildQueryParams()})
  searcher.search(query, salControl)
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
