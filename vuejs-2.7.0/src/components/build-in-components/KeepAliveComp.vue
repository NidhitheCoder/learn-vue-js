<script setup>
import { ref } from 'vue'
import SayHello from './SayHello.vue'
import SayHai from './SayHai.vue'

const show = ref(false);
const change = () => {
    show.value = !show.value
}
</script>

<template>
    <button @click="change">Click me</button>
    <KeepAlive>
        <SayHai v-if="show" />
    </KeepAlive>
    <KeepAlive>
        <SayHello v-if="!show" />
    </KeepAlive>
</template>

<style></style>