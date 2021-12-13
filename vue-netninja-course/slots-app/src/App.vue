<template>
  <div id="app">
    <form-helper>
      <h1>I am the slot title</h1>
      <p>I am the paragraph</p>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  name: 'App',
  components: {
    'form-helper':formHelper
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
</style>
