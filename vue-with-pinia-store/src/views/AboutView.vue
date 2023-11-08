<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dolorem alias voluptatum
      corrupti laboriosam consectetur sunt magni et ipsam, quos harum, voluptates pariatur
      reiciendis! Numquam tempore porro praesentium maiores ut.
    </p>
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
  gap: 2rem;
  flex-direction: column;
  width: 100%;
  padding: 2rem 4rem;
}
</style>
