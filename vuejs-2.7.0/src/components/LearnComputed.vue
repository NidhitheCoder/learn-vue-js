<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

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
    fullName.value = "Ricky Ponting";
}


// Writable computed property 
const firstName = ref("John");
const lastName = ref("Smith");

const fullName = computed({
    get: () => `${firstName.value} ${lastName.value}`,
    set(newValue) { [firstName.value, lastName.value] = newValue.split(' ') }
})

</script>

<template>
    <div :class="['container', authors.books.length ? 'available' : 'unavailable']">
        <h2>Learn computed</h2>
        <!-- <p>{{ authors.books.length ? 'Yes' : 'No' }}</p> -->
        <h5>{{ publishedBooksMessage }}</h5>
        <button @click="soldAllBooks">sold</button>
        <p>{{ fullName }} => {{ firstName }} + {{ lastName }}</p>
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