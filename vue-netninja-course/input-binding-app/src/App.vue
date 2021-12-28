<template>
  <div id="app">
    <add-blog></add-blog>
  </div>
</template>

<script>
import addblog from './components/addblog.vue'

export default {
  name: 'App',
  components: {
    'add-blog': addblog
  }
}
</script>

<style>
#app {
  font-family: 'Nunito SemiBold';
  margin: 0;
}
</style>
