<script setup>
import { onMounted, ref } from 'vue';
const el = ref(0);

onMounted(() => {
    console.log(el.value)
})
</script>

<template>
    <h2>Life Cycle hooks in Vue js</h2>
</template>

<style></style>