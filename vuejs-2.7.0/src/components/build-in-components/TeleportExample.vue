<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
    <button @click="open = true">Open Modal</button>
    <Teleport to="body">
        <div v-if="open" class="modal">
            <h2>Hello this is the modal</h2>
            <button @click="open = false">Close</button>
        </div>
    </Teleport>
</template>

<style>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    background-color: rgb(133, 134, 134);
    border-radius: 4px;
    padding: 1rem;
}
</style>