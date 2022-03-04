const  MyMixin = {
  data() {
    return {
      someData: 'this is from mixin',
    }
  },
  methods: {
    pressMe: function () {
      alert('hello');
    }
 }
}

export default MyMixin ;