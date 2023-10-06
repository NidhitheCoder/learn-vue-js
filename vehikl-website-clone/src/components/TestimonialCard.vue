<template>
    <v-card>
        <v-img src="https://vehikl.com/static/21486de2e51682c5dfbb70132af2c9b8/416c3/chris-keithlin.webp"></v-img>
        <div class="card-description-wrapper">
            <v-card-title>Hello</v-card-title>
            <v-card-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio.</v-card-subtitle>
        </div>
    </v-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.v-card {
    background-color: transparent;
    border: 2px solid $color-primary-faded;
    color: $color-dove-white;
}

.card-description-wrapper {
    width: 100%;
    text-align: center;
    padding: 1rem;
    height: auto;
}
</style>