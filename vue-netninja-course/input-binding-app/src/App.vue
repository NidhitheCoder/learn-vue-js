<template>
  <div id="app">
    <add-blog></add-blog>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
import addblog from './components/addblog.vue'
import showBlogs from './components/ShowBlogs.vue'
import listBlogs from './components/ListBlogs.vue'

export default {
  name: 'App',
  components: {
    'add-blog': addblog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
  }
}
</script>

<style>
#app {
  font-family: 'Nunito SemiBold', sans-serif;
  margin: 0;
}
</style>
