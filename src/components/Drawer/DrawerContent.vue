<script setup>

  import {useFilterControl} from "@/stores/filterControl.js";
  import {useSearchAndLoadControl} from "@/stores/searchAndLoading.js";

  const filterControl = useFilterControl()
  const salControl = useSearchAndLoadControl()

  const filterName = ref('')
  const filterStatus = ref('no')


</script>

<template>

  <div class="content-container">
    <h2 class="filter-title">FILTROS</h2>
    <div class="input-container">
      <v-text-field
        v-model="filterControl.filterName"
        label="Nome do cliente"
        :clearable="!salControl.isLoading"
        :readonly="salControl.isLoading"
      />
    </div>
    <div class="status-filters">
      <div class="order-filter">
        <v-select
          label="Ordernar por:"
          :items="[
          {pretty: 'Nome', val: 'customer_name'},
          {pretty: 'Data', val: 'order_date'},
          {pretty: 'Valor', val: 'amount_in_cents'},
          {pretty: 'Não', val: 'no'}
        ]"
          item-title="pretty"
          item-value="val"
          v-model="filterControl.filterSort"
          :disabled="salControl.isLoading"
        />
        <div class="order-radio" :class="{hidden: filterControl.filterSort === 'no'}">
          <v-radio-group v-model="filterControl.filterOrder" inline :disabled="salControl.isLoading">
            <v-radio label="Ascendente" value="asc" />
            <v-radio label="Descendente" value="desc" />
          </v-radio-group>
        </div>
      </div>
      <v-radio-group label="Filtrar por status:" v-model="filterControl.filterStatus" :disabled="salControl.isLoading">
        <v-radio label="Não" value="no" />
        <v-radio label="Pendente" value="pending" />
        <v-radio label="Completo" value="completed" />
      </v-radio-group>
    </div>
  </div>

</template>

<style scoped>

  .content-container{
    display: flex;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
  }

  .filter-title {
    margin-top: 10px;
    padding-left: 17px;
    font-size: 2.2rem;
    padding-bottom: 2px;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--surface);
  }

  .input-container{
    width: 90%;
    max-height: 50px;
    margin: 20px auto;
  }

  .order-filter {
    width: 90%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
  }

  .status-filters {
    margin: 10px 0;
  }

  .order-radio {
    transition: all 0.2s ease;
  }

  .order-radio.hidden {
    display: none;
  }

</style>
