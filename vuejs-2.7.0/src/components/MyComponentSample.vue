
<template>
  <!-- <input type="text" :value="title" @input="$emit('update:title', $event?.target?.value)" /> -->
  <input type="text" :value="title" @input="onInput">
</template>

<script setup  lang="ts">

defineProps(['title'])
const emit = defineEmits(['update:title'])

const onInput = (event: Event) => {
  emit('update:title', event.target?.value)
}
</script>

<style scoped></style>