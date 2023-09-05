<script setup lang="ts">
// import LearnComputed from './components/LearnComputed.vue';
import VModelExamples from './components/VModelExamples.vue';
// import RefsAndReactives from './components/RefsAndReactives.vue';
</script>

<template>
  <div class="wrapper">
    <!-- <LearnComputed /> -->
    <!-- <RefsAndReactives /> -->
    <VModelExamples />
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
</style>
