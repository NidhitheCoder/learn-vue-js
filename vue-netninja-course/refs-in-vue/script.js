new Vue({
  el: '#vue-app',
  data: {
    output: 'Your fav food is '
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.inputRef.value;
    }
  }
})