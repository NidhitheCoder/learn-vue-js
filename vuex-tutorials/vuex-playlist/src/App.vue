<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";
export default {
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
  },
  name: "app",
  data() {
    return {
      products: [
        { name: "Banana skin", price: 20 },
        { name: "Orange", price: 40 },
        { name: "Greenshell", price: 65 },
        { name: "Red shells", price: 55 },
      ],
    };
  },
};
</script>

<style>
</style>
