Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
  <div class="product">
  <div class="product-image">
    <img v-bind:src="image" alt="">
  </div>
  <div class="product-info">
    <h1>{{ title }}</h1>
    <p v-if="inventory > 10">In stock</p>
    <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out !</p>
    <p v-else>Out of stock</p>
    <p>Shipping: {{ shipping }}</p>
    <a v-bind:href="item">See in different color</a>
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    <p v-show="multiColor" class="multi-color">Mutlicolor available</p>
    <div class="variant-container">
      <!-- <div
        v-for="variant in variants"
        :key="variant.variantId"
        class="variant-item"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(variant.variantImage)"
      >
      </div> -->
      <div
      class="variant-item"
      :key="variant.variantId"
      v-for="(variant,index) in variants"
      :style="{ backgroundColor: variant.variantColor }"
      @mouseover="updateProduct(index)"
      >
      </div>
    </div>
    <!-- <button v-on:click="cart += 1">Add to cart</button> -->
    <button v-on:click="addToCart" class="add-button" :disabled="!inventory" :class="{disableButton: !inventory}">
      Add to cart
    </button>
    <button v-on:click="removeFromCart" class="remove-button" :disabled="!inventory" :class="{disableButton: !inventory}">
      Remove from cart
    </button>
    <div class="cart">
      <p>Cart({{ cart }})</p>
    </div>
  </div>
</div>`,
  data() {
    return {
      brand: "ZOZO",
      product: "Socks",
      // image: './assets/green-socks.png',
      selectedVariant: 0,
      item: "./assets/blue-socks.png",
      // inventory: 0,
      multiColor: true,
      details: ["80% cotton", "20% polyster", "Gender neutral"],
      variants: [
        {
          variantId: 123,
          variantColor: "darkslategray",
          variantImage: "./assets/blue-socks.png",
          variantQuantity: 0,
        },
        {
          variantId: 234,
          variantColor: "Green",
          variantImage: "./assets/green-socks.png",
          variantQuantity: 6,
        },
      ],
      cart: 9,
    };
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
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inventory() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if(this.premium) {
        return 'Free';
      }
      return '2.99';
    }
  },
});

const app = new Vue({
  el: "#app",
  data: {
    premium: true,
  }
});

