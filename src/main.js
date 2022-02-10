import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'

import VueParticles from 'vue-particles'
import Carousel3d from 'vue-carousel-3d'

Vue.config.productionTip = false

Vue.use(VueParticles);
Vue.use(Carousel3d);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
