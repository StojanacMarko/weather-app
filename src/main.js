import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import VueParticles from 'vue-particles'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueParticles);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
