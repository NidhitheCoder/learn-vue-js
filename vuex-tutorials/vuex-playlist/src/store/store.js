import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.store({
  state: {
    products: [
      { name: "Banana skin", price: 20 },
      { name: "Orange", price: 40 },
      { name: "Greenshell", price: 65 },
      { name: "Red shells", price: 55 },
    ],
  }
})