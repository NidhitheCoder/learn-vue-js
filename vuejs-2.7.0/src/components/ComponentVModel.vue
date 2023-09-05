<template>
    <div>Hello</div>
    <MyComponentSample v-model:title="inputVal" />
    <p>{{ inputVal }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MyComponentSample from './MyComponentSample.vue';

const inputVal = ref("")
</script>

<style scoped></style>