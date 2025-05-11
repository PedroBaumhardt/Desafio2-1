<script setup>

  import {useToastControl} from "@/stores/toastControl.js";
  const toastControl = useToastControl()

</script>

<template>

  <div class="toast-container">
    <div class="toast success-toast" v-if="toastControl.isSuccess" @click="toastControl.closeToast">
      <p class="toast-text success-text">Filtro aplicados</p>
    </div>
    <div class="toast error-toast" @click="toastControl.closeToast()" v-else>
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
    padding: 20px 40px;
    max-width: 80vw;
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
