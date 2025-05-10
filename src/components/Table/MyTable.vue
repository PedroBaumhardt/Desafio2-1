<script setup>

import {usePageControl} from "@/stores/pageControl.js";
import {useSearchAndLoadControl} from "@/stores/searchAndLoading.js";
import {useSearcher} from "@/stores/searcher.js";
import {useFilterControl} from "@/stores/filterControl.js";

const router = useRouter()
const salControl = useSearchAndLoadControl()
const pageControl = usePageControl()
const searcher = useSearcher()
const filterControl = useFilterControl()

const updatePage = (newPage) => {
  setTimeout(() => {
    if(salControl.isLoading) return
    filterControl.page = newPage
    const query = filterControl.buildQueryParams()
    router.replace({query: null})
    router.replace({query: query})
    searcher.search(query, salControl, pageControl)
  }, 0)
  }

</script>

<template>

  <div class="main-content-container">
    <div class="main-container">
      <h1 class="main-title">Tabela Order API</h1>
      <v-table>
        <thead>
          <TableHead />
        </thead>
        <tbody v-if="!salControl.isLoading">
          <DynamicRows :rows="pageControl.result"/>
        </tbody>
      </v-table>
      <i v-if="salControl.isLoading" class="fa-solid fa-spinner fa-spin fa-2xl my-spinner"></i>
      <div v-if="pageControl.isActive" class="pagination-container">
        <v-pagination @click="updatePage(pageControl.actualPage)" v-model="pageControl.actualPage" :length="pageControl.resultLen"/>
      </div>
    </div>
  </div>

</template>

<style scoped>

  .main-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .main-content-container {
    display: flex;
    justify-content: center;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    overflow-x: scroll !important;
    align-items: center;
  }

  .pagination-container {
    margin-top: 20px;
    max-width: 50vw;
  }

  .my-spinner {
    margin: 25px 0 10px;
  }

  @media(max-width: 1000px) {
    .main-title {
      font-size: 2rem;
    }

    .main-container {
      margin: 0 10px;
    }
  }

</style>
