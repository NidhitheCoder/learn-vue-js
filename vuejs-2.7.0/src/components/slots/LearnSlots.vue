<script setup>
import FancyButton from './FancyButton.vue'
import NamedSlots from './NamedSlots.vue'
</script>

<template>
  <div class="content-container">
    <h1>Slot component</h1>
    <FancyButton>
      <span style="color: red">Click me!</span>
      <h6>Another string</h6>
    </FancyButton>
    <FancyButton />
    <NamedSlots />
  </div>
</template>

<style>
.content-container {
  gap: 2rem;
  display: flex;
  flex-direction: column;
}
</style>
