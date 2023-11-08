<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()

const updateCount = () => {
  counterStore.updateCount(1)
}
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ counterStore.count }}</p>
    <button @click="updateCount">Increment Count</button>
  </main>
</template>
