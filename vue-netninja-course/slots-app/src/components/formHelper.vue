<template>
  <div class="hello">
    <slot name="title"></slot>
    <h1>I am the form helper</h1>
    <slot name="para" ></slot>
  </div>
</template>

<script>
export default {
  components:{

  },
  data() {
    return {
    }
  },
  methods: {

  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}

</style>
