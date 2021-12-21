<template>
  <div>
    <form-helper>
      <div slot="form-fields">
        <h3>Form one contact us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <label>Your message</label>
        <textarea ></textarea>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue';
export default {
  components: { formHelper },
  name: 'FormOne',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
