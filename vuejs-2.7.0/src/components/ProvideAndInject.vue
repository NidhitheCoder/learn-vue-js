<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';
import type { Item } from '@/types';

const items: Ref<Item[]> = inject('items');

const nameInputRef = ref();
const valueInputRef = ref();

const onAddButtonClick = () => {
    const name = nameInputRef.value.value;
    const value = valueInputRef.value.value;
    const newItem = { name, value };
    const updatedItems = [...items.value, newItem];
    items.value = updatedItems;
}
</script>
<template>
    <p>Provide and inject</p>
    <div class="wrapper">
        <div class="form">
            <div class="row">
                <span>Name:</span>
                <input ref="nameInputRef" type="text" />
            </div>
            <div class="row">
                <span>Value:</span>
                <input ref="valueInputRef" type="text" />
            </div>
            <div class="row">
                <button @click="onAddButtonClick">Add Item</button>
            </div>
        </div>
        <div class="container">
            <div class="item-wrapper" v-for="item in items" :key="item.name">
                <p>{{ item.name }}</p>
                <p>{{ item.value }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    width: 100%;
}

.item-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: aquamarine;
    min-width: 10rem;
    padding: 0.3rem;
    border-radius: 5px;
    color: maroon;
    font-weight: 600;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    background-color: azure;
    border-radius: 4px;
}

.row {
    padding: 1rem 0;
    color: black;
    width: 100%;
}

.row>span {
    margin-right: 0.5rem;
}

.row>input {
    border: 1px solid lightblue;
    border-radius: 4px;
    height: 2rem;
    min-width: 5rem;
    outline: none;
    padding-left: 0.5rem;
    color: darkcyan;
}

.row>button {
    border-radius: 4px;
    border: none;
    padding: 0.3rem;
    width: 100%;
    background-color: rgb(28, 120, 224);
    color: white;
    font-weight: 600;
}
</style>