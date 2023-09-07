
<template>
  <!-- <input type="text" :value="title" @input="$emit('update:title', $event?.target?.value)" /> -->
  <input type="text" :value="title" @input="onInput">
  <p>{{ title }}</p>
</template>

<script setup  lang="ts">

defineProps(['title'])
const emit = defineEmits(['update:title'])

const onInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emit('update:title', inputValue)
}
</script>

<style scoped></style>