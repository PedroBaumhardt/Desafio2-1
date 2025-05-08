<script setup>

</script>

<template>

  <div class="main-content-container">
    <div class="main-container">
      <h1 class="main-title">Tabela Order API</h1>
      <v-table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nome do cliente</th>
            <th>Email do cliente</th>
            <th>Data do pedido</th>
            <th>Valor</th>
            <th>status</th>
            <th>Criado em</th>
            <th>Atualizado em</th>
          </tr>
        </thead>
      </v-table>
    </div>
  </div>

</template>

<style scoped>

  th {
    background: var(--primary);
    color: var(--surface);
  }

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
