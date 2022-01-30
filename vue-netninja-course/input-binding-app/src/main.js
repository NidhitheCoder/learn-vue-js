import Vue from 'vue';
import App from './App.vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';
import axios from 'axios';
// import {firebase} from 'firebase';

Vue.config.productionTip = false
Vue.use(vueResource);
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAADQF7-4D2vyja9EV3pUhePaW290V_Eg",
  authDomain: "vue-sample-19564.firebaseapp.com",
  projectId: "vue-sample-19564",
  storageBucket: "vue-sample-19564.appspot.com",
  messagingSenderId: "182269898879",
  appId: "1:182269898879:web:2a8b8a4bf0ca651fbe8f4a",
  measurementId: "G-3F5DHJRH9K"
};

// Initialize Firebase
// const app = firebase(firebaseConfig);

//  Instance for vue router
const router = new VueRouter({
  // routes: [ route1, route2]
  routes: Routes,
  mode: 'history'
});

//  Custom Directives
Vue.directive(
  'rainbow',
  {
    bind(el, binding, vnode) {
      el.style.color = '#' + Math.random().toString().slice(2, 8)
    }
  }
)

Vue.directive(
  'theme',
  {
    bind(el, binding, vnode) {
      if (binding.value == 'wide') {
        el.style.maxWidth = '1200px'
      } else if (binding.value == 'narrow') {
        el.style.maxWidth = '800px'
      }

      if (binding.arg == 'column') {
        el.style.background = '#ddd',
          el.style.padding = '20px'
      }
    }
  }
);

// Filters
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...';
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
