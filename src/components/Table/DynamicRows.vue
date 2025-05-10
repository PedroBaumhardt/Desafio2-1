<script setup>

  const props = defineProps(['rows'])

</script>

<template>

  <tr
    v-for="row in props.rows"
    :key="row.id"
  >
    <td class="first-row text-center bold">{{ row.id }}</td>
    <td class="row text-center bold">{{ row.customer_name }}</td>
    <td class="row text-center bold">{{ row.customer_email }}</td>
    <td class="row text-center bold"><DateRow :date="row.order_date" /></td>
    <td class="row text-center bold"><ValueRow :value="row.amount_in_cents" /> </td>
    <td class="row text-center"><StatusRow :status="row.status" /></td>
    <td class="row text-center bold"><DateRow :date="row.created_at" /></td>
    <td class="last-row text-center bold"><DateRow :date="row.updated_at" /></td>
  </tr>

</template>

<style scoped>

  td {
    background-color: var(--primary-light);
  }

  .first-row,
  .row {
    border-right: 1px solid var(--primary-light-2);
  }

  .bold {
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    td {
      font-size: 12px;
    }

    td {
      font-size: 9px;
    }
  }

</style>
