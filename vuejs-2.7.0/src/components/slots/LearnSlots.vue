<script setup>
import FancyButton from './FancyButton.vue'
</script>

<template>
  <h1>Slot component</h1>
  <FancyButton>
    <span style="color: red">Click me!</span>
    <h6>Another string</h6>
  </FancyButton>
  <FancyButton />
</template>

<style></style>
