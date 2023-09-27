<script setup>
import { ref } from 'vue'
import { useMouse } from './useMouse'
const ballRef = ref();
const { x, y } = useMouse();

</script>
<template>
    <div class="composable-container">
        <h1>Composables</h1>
        <p>x: {{ x }}</p>
        <p>y: {{ y }}</p>
        <div ref="ballRef" class="ball" :style="{ left: `${x}px`, top: `${y}px`, backgroundColor: `#${y}${x}` }"></div>
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
</style>