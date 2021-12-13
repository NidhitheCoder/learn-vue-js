<template>
  <div id="app">
    <form-helper>
      <h1 slot="title"> {{title}}</h1>
      <p slot="para">I am the paragraph for the slot</p>
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
      title: 'I am a dynamic slot title'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
