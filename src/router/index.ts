import Vue from 'vue';
import Router from 'vue-router';
import lazyLoading from '@/utils/lazyLoading';
import Layout from '@/components/layout/AppMain.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          name: '首页',
          path: '/home',
          component: lazyLoading('home')
        },
        {
          name: '工作台',
          path: '/work',
          component: lazyLoading('work')
        },
        {
          name: '项目列表',
          path: '/project-list',
          component: lazyLoading('project')
        },
        {
          name: '项目详情',
          path: '/project/:projectId',
          component: lazyLoading('project')
        },
        {
          name: '项目预览',
          path: '/preview',
          component: lazyLoading('preview')
        }
      ]
    }
  ]
});
