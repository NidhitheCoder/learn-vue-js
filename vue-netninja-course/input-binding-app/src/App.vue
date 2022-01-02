<template>
  <div id="app">
    <add-blog></add-blog>
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import addblog from './components/addblog.vue'
import showBlogs from './components/ShowBlogs.vue'

export default {
  name: 'App',
  components: {
    'add-blog': addblog,
    'show-blogs': showBlogs
  }
}
</script>

<style>
#app {
  font-family: 'Nunito SemiBold';
  margin: 0;
}
</style>
