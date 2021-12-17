<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <form-one/>
    <form-two/>
  </div>
</template>

<script>
import FormOne from './components/FormOne.vue';
import FormTwo from './components/FormTwo.vue';

export default {
  name: 'App',
  components: {
    'form-one': FormOne,
    'form-two': FormTwo
  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style>
</style>
