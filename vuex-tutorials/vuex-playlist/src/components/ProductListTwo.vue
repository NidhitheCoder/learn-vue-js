<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  }
};
</script>
<style scoped>
#product-list-two {
  background: #71c7dd;
  margin-bottom: 30px;
  padding: 10px 20px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
}
#product-list-two ul{
  padding: 0;
}

#product-list-two li {
  display: block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255, 0.7);
}

.price {
  font-weight: bold;
  color: #046481;
}
</style>
