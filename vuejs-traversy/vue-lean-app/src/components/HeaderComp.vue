<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      :text="showAddTask ? 'Close' : 'Add task'"
      @btn-click="$emit('toggle-add-task')"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./ButtonComp.vue";
export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
