import Vue from 'vue';
import 'es6-promise/auto';
import 'idempotent-babel-polyfill';
import axios from 'axios';
import VueAxios from 'vue-axios';

import sampleComponent from './Components/sampleComponent/sampleComponent.vue';
import firstComponent from './Components/firstComponent/firstComponent.vue';
import sampleProfile from './Components/sampleProfile/sampleProfile.vue';

Vue.component(sampleComponent.name, sampleComponent);
Vue.component(firstComponent.name, firstComponent);
Vue.component(sampleProfile.name, sampleProfile);
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;

window.eventBus = new Vue();

new Vue({
  el: '#app'
});
