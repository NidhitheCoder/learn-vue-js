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
    <product-review></product-review>
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
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
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

Vue.component("product-review", {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name" placeholder="name">
        </p>
        
        <p>
          <label for="review">Review:</label>      
          <textarea id="review" v-model="review"></textarea>
        </p>
        
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>
            
        <p>
          <input type="submit" value="Submit">  
        </p>    
      
      </form>
  `,
  data() {
    return  {
      name: null,
      review: null,
      rating: null,
    }
  },
  methods:{
    onSubmit() {
      let productReview ={
        name: this.name,
        rating: this.rating,
        review: this.review
      }
      this.name = null
      this.review = null
      this.rating = null
    }
  }
})

const app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    deleteItem(id) {
      let count = 0;
      this.cart = this.cart.filter(item => {
        if(item === id && count === 0 ) {
          count++;
          return ;
        }
        return item;
      })
    }
  }
});

