<template>
    <input type="text" :value="title" @input="onTitleUpdate">
    <p>Title here : {{ title }}</p>
</template>

<script setup lang="ts">

const props = defineProps({ title: String, titleModifiers: { default: () => { } } })

const emits = defineEmits(['update:title'])
const onTitleUpdate = (event: Event) => {
    let inputVal = (event.target as HTMLInputElement).value;
    console.log(props.titleModifiers)
    if (props.titleModifiers.capitalize) {
        inputVal = inputVal.charAt(0).toUpperCase() + inputVal.slice(1);
    }
    emits('update:title', inputVal)
}
</script>

<style scoped></style>