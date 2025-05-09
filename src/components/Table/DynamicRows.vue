<script setup>

  const props = defineProps(['rows'])
  const rows = [
    {
    id: 'a',
    name: 'a',
    email: 'a',
    date: '1666632563517',
    value: 'a',
    status: 'pending',
    created_at: '1666632563517',
    updated_at: '1666632563517',
  },
    {
      id: 'a',
      name: 'a',
      email: 'a',
      date: '1666632563517',
      value: 'a',
      status: 'completed',
      created_at: '1666632563517',
      updated_at: '1666632563517',
    },
  ]

</script>

<template>

  <tr
    v-for="row in rows"
    :key="row.id"
  >
    <td class="first-row text-center bold">{{ row.id }}</td>
    <td class="row text-center">{{ row.name }}</td>
    <td class="row text-center">{{ row.email }}</td>
    <td class="row text-center bold"><DateRow :date="row.date" /></td>
    <td class="row text-center">{{ row.value }}</td>
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

</style>
