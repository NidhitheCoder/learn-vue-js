<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from '../stores/counter'

const { updateCount, count } = useCounterStore()

const onUpdateCount = () => {
  updateCount(1)
}
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ count }}</p>
    <button @click="onUpdateCount">Increment Count</button>
  </main>
</template>
