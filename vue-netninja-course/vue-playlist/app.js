new Vue({
  el: '#vue-app',
  data: {
    name: 'Jao',
    job: 'Doctor'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
