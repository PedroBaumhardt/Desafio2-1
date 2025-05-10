<script setup>
import {useDrawerStore} from "@/stores/drawer.js";

const drawerStore = useDrawerStore();

const closeDrawer = () => {
  drawerStore.closeDrawer();
}

</script>

<template>
  <div class="overscreen-container" :class="{ closed: drawerStore.isHidden }">
    <figure
      class="background"
      :class="{ closed: !drawerStore.isOpen, hidden: drawerStore.isHidden }"
      @click="closeDrawer"
    />
    <div class="drawer-container">
      <div class="drawer-box" :class="{ closed: !drawerStore.isOpen }">
        <DrawerContent />
        <DrawerButton />
      </div>
      <div class="handle-container" :class="{ closed: !drawerStore.isOpen }">
        <DrawerHandle />
      </div>
    </div>
  </div>

</template>

<style scoped>

 .overscreen-container {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 100;
   height: 100vh;
   max-height: 100vh;
   width: 100vw;
   max-width: 100vw;
   overflow-x: hidden;
 }

 .overscreen-container.closed {
   width: 0;
 }

 .background {
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, .3);
   backdrop-filter: blur(10px);
   transition: all 0.4s ease-in;
 }

 .background.closed {
   opacity: 0;
 }

 .background.hidden {
   display: none;
 }

 .drawer-container {
   display: flex;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 101;
   max-width: 98vw;
   width: 400px;
   height: 100vh;
   max-height: 100vh;
 }

 .drawer-box {
   position: relative;
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 80%;
   overflow-y: scroll;
   scrollbar-width: none;
   -ms-overflow-style: none;
   background-color: var(--secondary);
   transition: all 0.4s ease-out;
 }

 .drawer-box::-webkit-scrollbar {
   display: none;
 }

 .drawer-box.closed {
   margin-left: -80%;
 }

 .handle-container {
   position: relative;
   align-self: center;
   z-index: 102;
   margin-left: -25px;
   transition: all 0.4s ease-out;
 }

 .handle-container.closed {
   margin-left: -18px;
 }

</style>
