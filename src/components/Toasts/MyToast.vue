<script setup>

  import {useToastControl} from "@/stores/toastControl.js";

  const toastControl = useToastControl()

</script>

<template>

  <div class="toast-container">
    <div class="toast success-toast" v-if="toastControl.isSuccess">
      <p class="toast-text success-text">Filtro aplicados</p>
    </div>
    <div class="toast error-toast">
      <p class="toast-text error-text">Erro inesperado</p>
    </div>
  </div>

</template>

<style scoped>

  .toast-container {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 200;
  }

  .toast {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    max-width: 80vw;
    width: 200px;
    height: 50px;
    border-radius: 10px;
  }

  .success-toast {
    background-color: var(--fading-green);
  }

  .error-toast {
    background-color: var(--fading-red);
  }

  .toast-text {
    font-size: 20px;
  }

</style>
