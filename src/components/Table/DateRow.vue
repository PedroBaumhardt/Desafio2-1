<script setup>

  const props = defineProps(['date'])

  const formatDate = (date) => {
    return new Date(parseInt(date, 10)).toLocaleDateString()
  }

</script>

<template>

  <p>{{formatDate(props.date)}}</p>

</template>

<style scoped>

</style>
