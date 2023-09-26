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
    <NamedSlots>
      <h2>Hello this is the default content for the named slot</h2>
      <template #banner>
        <h2>This is the banner content for the named slot component</h2>
      </template>
      <template v-slot:footer>
        <p>This is the footer content for the named slot</p>
      </template>
    </NamedSlots>
  </div>
</template>

<style>
.content-container {
  gap: 2rem;
  display: flex;
  flex-direction: column;
}
</style>
