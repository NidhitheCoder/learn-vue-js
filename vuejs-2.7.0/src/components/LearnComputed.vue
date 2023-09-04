<script setup lang="ts">
import { computed, reactive } from 'vue';

const authors = reactive({
    name: 'Jack',
    books: [
        'vue',
        'react',
        'angular'
    ]
})

const publishedBooksMessage = computed(() => authors.books.length ? 'Yes' : 'No');

const soldAllBooks = () => {
    authors.books = [];
}

</script>

<template>
    <div :class="['container', authors.books.length ? 'available' : 'unavailable']">
        <h2>Learn computed</h2>
        <!-- <p>{{ authors.books.length ? 'Yes' : 'No' }}</p> -->
        <h5>{{ publishedBooksMessage }}</h5>
        <button @click="soldAllBooks">sold</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5rem;
}

.available {
    background-color: green;
}

.unavailable {
    background-color: brown;
}
</style>