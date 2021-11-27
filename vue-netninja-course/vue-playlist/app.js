new Vue({
  el: '#vue-app',
  data: {
    name: 'Jao',
    job: 'Doctor',
    website: 'https://www.thenetninja.co.uk',
    redirectionTag: '<a href="https://www.thenetninja.co.uk">redirect</a>',
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
