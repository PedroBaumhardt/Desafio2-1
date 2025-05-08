<script setup>

  import {useDrawerStore} from "@/stores/drawer.js";

  const drawerStore = useDrawerStore();

  const toggle = () => {
    if(drawerStore.isOpen) {
      drawerStore.closeDrawer();
      return
    }
    drawerStore.openDrawer();
  }

</script>

<template>

  <v-btn
    class="soft-transition responsive"
    :class="{ reverse: drawerStore.isOpen }"
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

  @media (max-width: 768px) {
    .responsive {
      transform: scale(.6);
    }
    .responsive.reverse {
      transform: scale(.6) rotate(180deg);
    }
  }

</style>
