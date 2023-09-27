<script setup>
import { ref } from 'vue'
import DynamicSlotNames from './DynamicSlotNames.vue'
import FancyButton from './FancyButton.vue'
import NamedSlots from './NamedSlots.vue'
import ScopedSlots from './ScopedSlots.vue'
import NamedScopedSlots from './NamedScopedSlots.vue'

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

    <!--Single default scoped slots -->
    <h1>Scoped slots</h1>
    <ScopedSlots v-slot="slotProps">
      <div class="scoped-slot-wrapper">
        {{ slotProps.count }}
        {{ slotProps.text }}
      </div>
    </ScopedSlots>

    <!-- Named scoped slots -->
    <h1>Named Scoped Slots</h1>
    <NamedScopedSlots>
      <template #header="{ title }">
        {{ title }}
      </template>
      <template #content="{ content }">
        {{ content }}
      </template>
      <template #default="{ content }">
        <h1>{{ content.name }}</h1>
        <p>{{ content.value }}</p>
      </template>
    </NamedScopedSlots>
  </div>
</template>

<style>
.content-container {
  gap: 2rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
}

.scoped-slot-wrapper {
  background-color: darkgrey;
  border-radius: 4px;
  padding: 0.2rem;
  color: orangered;
  font-weight: 600;
}
</style>
