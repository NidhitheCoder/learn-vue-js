new Vue({
  el: '#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0,
    color: 'red',
  },
  methods: {
    add: function (inc){
      this.age += inc;
    },
    substract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event){
      console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
      this.color ='rgb('+this.x+','+this.y+','+this.x+')';
    },
    click: function() {
      alert("You click me")
    }
  }
})