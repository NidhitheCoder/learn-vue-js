<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ countText }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()

const countText = computed(() => `The double count is ${counterStore.doubleCount}`)
</script>

<style>
.about {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1rem;
}
</style>
