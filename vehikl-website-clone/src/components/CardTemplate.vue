<template>
    <div class="card-wrapper" :style="{ padding: variant === 'small' ? '1rem' : '2rem' }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ variant?: "small" | "normal" }>();

</script>

<style lang="scss">
.card-wrapper {
    border: 2px solid $color-primary-faded;
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    background: linear-gradient(to top, $color-primary-faded, $color-primary-background);
}
</style>