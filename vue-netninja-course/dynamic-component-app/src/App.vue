<template>
  <div id="app">
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
