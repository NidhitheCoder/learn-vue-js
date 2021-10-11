import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: "Banana skin", price: 20 },
      { name: "Orange", price: 40 },
      { name: "Greenshell", price: 65 },
      { name: "Red shells", price: 55 },
    ],
  },
  getters:{
    saleProducts: state => {
      let salesProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price/2,
        }
      });
      return salesProducts;
    }
  },
  mutations: {
    reducePrice : state => {
      state.products.forEach( product => {
        product.price -= 1;
      })
    }
  }
})