// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import NProgress from 'nprogress';
import * as filters from './filter';
Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

sync(store, router);

router.beforeEach((to, _from, next) => {
  if (to.path === '/login') {
    localStorage.removeItem('username');
  }
  let userInfo = localStorage.getItem('userInfo');
  if (!userInfo && to.path !== '/login') {
    next({ path: '/login' });
  } else {
    NProgress.start();
    next();
  }
});
router.afterEach(() => {
  NProgress.done();
});

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

export default app;
