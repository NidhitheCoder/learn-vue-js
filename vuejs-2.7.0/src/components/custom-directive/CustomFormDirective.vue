<script setup>
const change = () => {
    console.log("change clicked success")
}

const formData = {
    keys: ['name', 'id', 'year'],
    onSubmit: change
}
</script>
<template>
    <div v-form="formData">
        <input id="name" type="text">
        <input id="id" type="text">
        <input id="year" type="text">
        <button type="button"></button>
        <button type="submit">Submit</button>
    </div>
</template>

<style>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    flex-direction: column;
    gap: 2rem;
}
</style>