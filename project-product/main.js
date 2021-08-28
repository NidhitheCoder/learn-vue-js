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
      variantColor: 'Blue',
      variantImage: './assets/blue-socks.png',
      },
      {
        variantId: 234,
        variantColor: 'Green',
        variantImage: './assets/green-socks.png',
      }
    ],
    cart: 9,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(image) {
      this.image = image;
    }
  },
});