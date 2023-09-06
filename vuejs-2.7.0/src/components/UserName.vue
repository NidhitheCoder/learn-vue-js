<template>
    <span>First Name</span>
    <input type="text" :value="firstName" @input="onFirstNameChange">
    <span>Last Name</span>
    <input type="text" :value="lastName" @input="onLastNameChange">
</template>

<script setup lang="ts">
defineProps(['firstName', 'lastName'])
const emit = defineEmits(["update:firstName", "update:lastName"])

const onFirstNameChange = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emit('update:firstName', inputValue)
}

const onLastNameChange = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emit('update:lastName', inputValue)
}
</script>
<style></style>