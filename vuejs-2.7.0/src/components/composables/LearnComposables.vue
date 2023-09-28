<script setup>
import { ref } from 'vue';
import { useMouse } from './useMouse';
import { useFetch } from './useFetch';

const ballRef = ref();
const { x, y } = useMouse();
const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

</script>
<template>
    <div v-if="isLoading">Loading</div>
    <div v-if="error">Error</div>
    <div v-if="data" class="composable-container">
        <h1>Composables</h1>
        <div ref="ballRef" class="ball" :style="{ left: `${x}px`, top: `${y}px`, backgroundColor: `#${y}${x}` }"></div>
        <div class="user-container" v-for="item in data" :key="item.id">
            <p>{{ item.id }}</p>
            <p>{{ item.name }}</p>
            <p>{{ item.phone }}</p>
        </div>
    </div>
</template>
<style>
.composable-container {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.ball {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    position: absolute;
    left: var(--x-value);
    top: var(--y-value)
}

.user-container {
    width: 70%;
    height: auto;
    background-color: gray;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>