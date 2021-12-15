<template>
  <div id="app">
    <!-- <form-helper>
      <h1 slot="title"> {{title}}</h1>
      <p slot="para">I am the paragraph for the slot</p>
    </form-helper> -->
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name">
        <input type="password" placeholder="Password">
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
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
