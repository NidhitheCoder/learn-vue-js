<template>
  <div id="app">
    <the-header />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    'the-header': TheHeader,
  }
}
</script>

<style>
</style>
