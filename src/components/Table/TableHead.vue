<script setup>

</script>

<template>

  <tr>
    <th class="text-center">ID</th>
    <th class="text-center">Nome do cliente</th>
    <th class="text-center">Email do cliente</th>
    <th class="text-center">Data do pedido</th>
    <th class="text-center">Valor</th>
    <th class="text-center">Status</th>
    <th class="text-center">Criado em</th>
    <th class="text-center">Atualizado em</th>
  </tr>

</template>

<style scoped>

  th {
    background: var(--primary);
    white-space: nowrap;
    color: var(--surface);
  }

  @media (max-width: 1000px) {
    th {
      font-size: 12px;
    }
  }



</style>
