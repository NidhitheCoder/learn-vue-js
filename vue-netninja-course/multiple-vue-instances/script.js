let one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One",
  },
  methods: {},
  computed: {
    greet: function() {
      return 'Hello from app one'
    }
  },
});

let two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two",
  },
  methods: {
    changeTitle: function() {
      one.title = "Title changed"
    }
  },
  computed: {
    greet: function() {
      return 'Hey dude, this is app two'
    }
  },
});


two.title="Changed from Outside"