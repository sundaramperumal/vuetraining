import Vue from 'vue';
import 'es6-promise/auto';
import 'idempotent-babel-polyfill';

import sampleComponent from './Components/sampleComponent/sampleComponent.vue';
import viewDataComponent from './Components/sampleComponent/viewDatas.vue';
import lifecycle from './Components/lifecycle/lifecycle.vue';
import alert from './Components/alert.vue';
import sampleView from './Components/sampleView.vue';
import editDataComponent from './Components/sampleComponent/editDatas.vue';
import firstComponent from './Components/firstComponent/firstComponent.vue';
import sampleProfile from './Components/sampleProfile/sampleProfile.vue';

Vue.component(sampleComponent.name, sampleComponent);
Vue.component(viewDataComponent.componentName, viewDataComponent);
Vue.component(editDataComponent.componentName, editDataComponent);
Vue.component(lifecycle.name, lifecycle);
Vue.component(alert.name, alert);
Vue.component(sampleView.name, sampleView);
Vue.component(firstComponent.name, firstComponent);
Vue.component(sampleProfile.name, sampleProfile);

window.eventBus = new Vue();

new Vue({
  el: '#app'
});
