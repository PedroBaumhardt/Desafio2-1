<script setup>

  const props = defineProps(['date'])

  const formatDate = (date) => {
    console.log(date)
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear()).slice(2);
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

</script>

<template>

  <p>{{formatDate(props.date)}}</p>

</template>

<style scoped>

</style>
