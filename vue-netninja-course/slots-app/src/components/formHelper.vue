<template>
  <div class="hello">
    <!-- <slot name="title"></slot>
    <h1>I am the form helper</h1>
    <slot name="para" ></slot> -->
    <h1>Please fill out form</h1>
    <form action="">
      <div id="form-header">
        <slot name="form-header" />
      </div>
      <div id="form-fields">
        <slot name="form-fields" />
      </div>
      <div id="form-control">
        <slot name="form-control" />
      </div>
      <div id="useful-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
    </form>
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
form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}

h1 {
  text-align: center;
}

#form-header {
    background: #ddd;
    border: 1px solid #bbb;
}

form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

#useful-links ul {
  padding: 0;
}

#useful-links li {
 display: inline-block;
 margin-right: 10px;
}
</style>
