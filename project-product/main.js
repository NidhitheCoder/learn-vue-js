const app = new Vue({
  el: '#app',
  data: {
    brand: 'ZOZO',
    product: 'Socks',
    // image: './assets/green-socks.png',
    selectedVariant: 0,
    item: './assets/blue-socks.png',
    // inventory: 0,
    multiColor: true,
    details: ['80% cotton', '20% polyster', 'Gender neutral'],
    variants: [
      {
      variantId: 123,
      variantColor: 'darkslategray',
      variantImage: './assets/blue-socks.png',
      variantQuantity: 0,
      },
      {
        variantId: 234,
        variantColor: 'Green',
        variantImage: './assets/green-socks.png',
        variantQuantity: 6,
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
    // updateProduct(image) {
      // this.image = image;
    // },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    }
  },
  computed: {
    title () {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inventory() {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  },
});