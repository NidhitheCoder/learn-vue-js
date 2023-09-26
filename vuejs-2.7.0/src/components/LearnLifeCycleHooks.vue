<script setup>
import { onBeforeMount, onMounted, onUpdated, onUnmounted, ref } from 'vue';

const defaultNumber = 0;
const incrementValue = 2;
const number = ref(defaultNumber);

onBeforeMount(() => {
    console.log("Before mount")
})

onMounted(() => {
    console.log("Mounted", number.value)
})

onUpdated(() => {
    console.log("Updated", number.value)
})

onUnmounted(() => {
    console.log("Unmounted");
})

const onUpdateButtonClick = () => {
    number.value += incrementValue;
}
</script>

<template>
    <h2>Life Cycle hooks in Vue js</h2>
    <p>{{ number }}</p>
    <button @click="onUpdateButtonClick">Update</button>
</template>

<style></style>