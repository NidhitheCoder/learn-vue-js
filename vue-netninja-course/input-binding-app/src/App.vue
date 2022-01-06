<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <!-- <add-blog></add-blog>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs> -->
  </div>
</template>

<script>
import addblog from "./components/Addblog";
import showBlogs from "./components/ShowBlogs.vue";
import listBlogs from "./components/ListBlogs.vue";
import header from './components/header.vue';

export default {
  name: "App",
  components: {
    "add-blog": addblog,
    "show-blogs": showBlogs,
    "list-blogs": listBlogs,
    'app-header': header,
  },
};
</script>

<style>
#app {
  font-family: "Nunito SemiBold", sans-serif;
  margin: 0;
}
</style>
