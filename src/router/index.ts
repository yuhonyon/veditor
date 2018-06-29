import Vue from 'vue';
import Router from 'vue-router';
import lazyLoading from '@/utils/lazyLoading';
import Layout from '@/components/layout/';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          name: '首页',
          path: '/home',
          component: lazyLoading('home')
        }
      ]
    }
  ]
});
