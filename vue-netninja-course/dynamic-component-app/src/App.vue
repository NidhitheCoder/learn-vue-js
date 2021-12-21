<template>
  <div>
    <!-- <form-one></form-one>
    <form-two></form-two> -->
    <component v-bind:is="component"></component>
    <button v-on:click="component='form-one'">Show form one</button>
    <button v-on:click="component='form-two'">Show form two</button>
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
      component: 'form-one',
    }
  },
  methods: {

  },
}
</script>

<style>
</style>
