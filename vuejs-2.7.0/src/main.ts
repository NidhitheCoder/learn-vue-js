import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { UseVFormDirective } from './utils/global-directives'

const app = createApp(App)
app.directive('form', UseVFormDirective)
app.mount('#app')
