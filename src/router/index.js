import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import listRouter from './luoGan.js'
import detailRouter from './yangxiaoyu.js'
import activityRouter from './wusicong.js'

var router = [];
router = router.concat(listRouter).concat(detailRouter).concat(activityRouter);
export default new Router({
  routes: router
})
