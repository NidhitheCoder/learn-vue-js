<template>
  <div id="app">
    <the-header />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <mixins-example />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader.vue';
import MixinsExample from './components/MixinsExample.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    'the-header': TheHeader,
    'mixins-example': MixinsExample,
  }
}
</script>

<style>
</style>
