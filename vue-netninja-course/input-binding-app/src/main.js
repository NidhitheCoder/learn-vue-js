import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

//  Custom Directives
Vue.directive(
  'rainbow',
  {
    bind(el, binding, vnode) {
      el.style.color = '#' + Math.random().toString().slice(2,8)
    }
  }
)

new Vue({
  render: h => h(App),
}).$mount('#app')
