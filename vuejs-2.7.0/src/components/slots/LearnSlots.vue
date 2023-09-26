<script setup>
import { ref } from 'vue'
import DynamicSlotNames from './DynamicSlotNames.vue'
import FancyButton from './FancyButton.vue'
import NamedSlots from './NamedSlots.vue'

const responseSlot = ref('error')

const onToggleButtonClick = () => {
  responseSlot.value = responseSlot.value === 'error' ? 'success' : 'error'
}
</script>

<template>
  <div class="content-container">
    <!-- Normal slots -->
    <h1>Slot component</h1>
    <FancyButton>
      <span style="color: red">Click me!</span>
      <h6>Another string</h6>
    </FancyButton>
    <FancyButton />

    <!-- Named slots -->
    <h1>Named slots</h1>
    <NamedSlots>
      <h2>Hello this is the default content for the named slot</h2>
      <template #banner>
        <h2>This is the banner content for the named slot component</h2>
      </template>
      <template v-slot:footer>
        <p>This is the footer content for the named slot</p>
      </template>
    </NamedSlots>

    <!-- Dynamic slots -->
    <h1>Dynamic slots</h1>
    <button @click="onToggleButtonClick">Toggle response</button>
    <h3 style="color: white; text-transform: capitalize">{{ responseSlot }}</h3>
    <DynamicSlotNames>
      <template v-slot:[responseSlot]> error Content </template>
    </DynamicSlotNames>
  </div>
</template>

<style>
.content-container {
  gap: 2rem;
  display: flex;
  flex-direction: column;
}
</style>
