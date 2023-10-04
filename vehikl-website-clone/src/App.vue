<script setup>
import TopNavbar from './components/TopNavbar.vue'
</script>

<template>
  <div class="main-wrapper">
    <top-navbar />
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style>
.main-wrapper {
  height: 100%;
  width: 100%;
}

.content-wrapper {
  padding-top: 5rem;
}
</style>
