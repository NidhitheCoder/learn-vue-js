<template>
  <div>
    <form-helper>
      <div slot="form-fields">
        <h3>Form two - login</h3>
        <p>Enter your details to login</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="unsername" required>
         <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">login</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
export default {
  name: 'FormTwo',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handleSubmit: function () {
      alert("Thanks for logging in (form two")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
