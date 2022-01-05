import Vue from 'vue';
import App from './App.vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.config.productionTip = false
Vue.use(vueResource);
Vue.use(VueRouter);

//  Instance for vue router
const router = new VueRouter({
  // routes: [ route1, route2]
  routes: Routes
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
