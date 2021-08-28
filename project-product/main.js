const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/green-socks.png',
    item: './assets/blue-socks.png',
    inventory: 1190,
    multiColor: true,
    details: ['80% cotton', '20% polyster', 'Gender neutral'],
    variants: [
      {
      variantId: 123,
      variantColor: 'blue'
      },
      {
        variantId: 234,
        variantColor: 'green'
      }
    ]
  }
});