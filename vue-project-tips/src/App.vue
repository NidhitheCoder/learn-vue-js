<template>
  <div id="app">
    <the-header />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <mixins-example />
    <Button btn-text="From parent" v-bind:bg-color="bgColor"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader.vue';
import MixinsExample from './components/MixinsExample.vue';
import Button from  './components/Button.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    'the-header': TheHeader,
    'mixins-example': MixinsExample,
    Button,
  },
  data: () => ({
    bgColor: 'orange'
  })
}
</script>

<style>
</style>
