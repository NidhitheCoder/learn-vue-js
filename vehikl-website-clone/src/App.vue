<script setup>
import FooterComp from './components/FooterComp.vue';
import TopNavbar from './components/TopNavbar.vue'
</script>

<template>
  <div class="main-wrapper">
    <top-navbar />
    <div class="content-wrapper">
      <router-view />
    </div>
    <footer-comp />
  </div>
</template>

<style lang="scss">
.main-wrapper {
  height: 100%;
  width: 100%;
  background-color: $color-primary-background;
}

.content-wrapper {
  padding-top: 5rem;
}
</style>
