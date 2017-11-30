// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import {InputNumber,Input} from 'element-ui';
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'

import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(InputNumber)
Vue.use(Input)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
