<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" @toggle-add-task="$emit('toggle-add-task')" color="green" /> 
  </header>
</template>

<script>
import Button from './ButtonComp.vue';
export default {
 name: 'Header',
 props: {
   title: String 
  },
  components: {
    Button
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
