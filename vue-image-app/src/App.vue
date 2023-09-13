<template>
  <div class="app-container">
    <TopNavbar />
  </div>
</template>

<script setup>
// https://madewithvuejs.com/image
import TopNavbar from './components/TopNavbar.vue';

</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Dosis', sans-serif;
}

.app-container {
  background-color: lightgray;
  height: 100vh;
  width: 100vw;
}
</style>
