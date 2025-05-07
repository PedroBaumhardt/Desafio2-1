<script setup>

  const isRotated = ref(false);

  const toggle = () => {
    console.log('toggle');
    isRotated.value = !isRotated.value;
  }

</script>

<template>

  <v-btn
    class="soft-transition"
    :class="{ reverse: isRotated }"
    icon="fa:fa-solid fa-caret-right"
    variant="flat"
    @click="toggle"
  />

</template>

<style scoped>

  .soft-transition{
    transition: transform 0.4s ease-out;
  }

  .reverse {
    transform: rotate(180deg);
  }

</style>
