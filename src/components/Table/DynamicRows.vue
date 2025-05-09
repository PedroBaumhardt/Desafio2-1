<script setup>

  const props = defineProps(['rows'])
  const rows = [
    {
    id: 'a',
    name: 'a',
    email: 'a',
    date: 'a',
    value: 'a',
    status: 'pending',
    created_at: 'a',
    updated_at: 'a',
  },
    {
      id: 'a',
      name: 'a',
      email: 'a',
      date: 'a',
      value: 'a',
      status: 'completed',
      created_at: 'a',
      updated_at: 'a',
    },
  ]

</script>

<template>

  <tr
    v-for="row in rows"
    :key="row.id"
  >
    <td class="first-row">{{ row.id }}</td>
    <td class="row">{{ row.name }}</td>
    <td class="row">{{ row.email }}</td>
    <td class="row">{{ row.date }}</td>
    <td class="row">{{ row.value }}</td>
    <td class="row text-center"><StatusRow :status="row.status" /></td>
    <td class="row">{{ row.created_at }}</td>
    <td class="last-row">{{ row.updated_at }}</td>
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

</style>
