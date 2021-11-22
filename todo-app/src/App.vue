<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <TodoList msg="Toto list component"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>
