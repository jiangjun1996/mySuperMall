import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
