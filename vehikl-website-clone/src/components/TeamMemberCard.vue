<template>
    <v-card>
        <v-img :src="content.imageURL"></v-img>
        <div class="card-description-wrapper">
            <v-card-title>{{ content.name }}</v-card-title>
            <v-card-subtitle>{{ content.designation }}</v-card-subtitle>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { TeamMember } from '@/types';

defineProps<{ content: TeamMember }>()

</script>

<style scoped lang="scss">
.v-card {
    background-color: transparent;
    border: 2px solid $color-primary-faded;
    color: $color-dove-white;
    min-height: 350px;
    padding-top: 1rem;
}

.card-description-wrapper {
    border-top: 2px solid $color-primary-faded;
    width: 100%;
    text-align: center;
    padding: 1rem;
    height: auto;
}

.v-card-title {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    padding: 0;
}

.v-card-subtitle {
    font-size: 0.875rem;
    line-height: 1.5rem;
}
</style>