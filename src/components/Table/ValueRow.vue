<script setup>

 const props = defineProps(["value"])

 const formatValue = (value) => {
   let floatVal = parseFloat(value, 10)
   let realVal = floatVal / 100
   return "R$ " + realVal.toFixed(2)
 }

</script>

<template>

  <p>{{formatValue(props.value)}}</p>

</template>

<style scoped>

</style>
