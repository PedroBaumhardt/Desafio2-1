<script setup>

import {usePageControl} from "@/stores/pageControl.js";

const pageControl = usePageControl()

</script>

<template>

  <div class="main-content-container">
    <div class="main-container">
      <h1 class="main-title">Tabela Order API</h1>
      <v-table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          <DynamicRows :rows="pageControl.result"/>
        </tbody>
      </v-table>
      <div v-if="pageControl.isActive" class="pagination-container">
        <v-pagination v-model="pageControl.actualPage" :length="pageControl.resultLen"/>
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
    align-items: center;
  }

</style>
