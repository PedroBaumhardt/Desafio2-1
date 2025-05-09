<script setup lang="ts">

 const props = defineProps({
   status: String
 })

</script>

<template>

  <i v-if="props.status === 'completed'" class="fa-regular fa-circle-check fa-xl" style="color: #63E6BE;"/>
  <i v-else class="fa-regular fa-circle-xmark fa-xl" style="color: red" />

</template>

<style scoped>

</style>
