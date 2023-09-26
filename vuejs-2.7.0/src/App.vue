<script setup lang="ts">
import { ref } from 'vue';
import ComponentIndex from './components/ComponentVModel/ComponentIndex.vue';
// import LearnComputed from './components/LearnComputed.vue';
// import VModelExamples from './components/VModelExamples.vue';
// import RefsAndReactives from './components/RefsAndReactives.vue';
import LearnLifeCycleHooks from './components/LearnLifeCycleHooks.vue';

const shouldShowForm = ref(true);

const onToggleClick = () => shouldShowForm.value = !shouldShowForm.value;
</script>

<template>
  <div class="wrapper">
    <button @click="onToggleClick" class="toggle-button">Toggle</button>
    <!-- <LearnComputed /> -->
    <!-- <RefsAndReactives /> -->
    <!-- <VModelExamples /> -->
    <ComponentIndex v-if="shouldShowForm" />
    <LearnLifeCycleHooks v-if="!shouldShowForm" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.toggle-button {
  background-color: aquamarine;
  color: rgb(94, 5, 94);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  outline: none;
  border: none;
}
</style>
