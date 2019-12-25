import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../src/components/Home';

const BtnRouter = () => import('./../src/components/BtnRouter');
const BtnRouter2 = () => import('./../src/components/BtnRouter2');
// import User from '../src/components/User';
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'news',
        component: () => import('../src/components/HomeNews'),
        // 路由内守卫
        beforeEnter: (to, from, next) => {
          document.title = '每日新闻';
          next();
          window.console.log('每日新闻');
        }
      },
      {
        path: 'message',
        component: () => import('./../src/components/HomeMessage')
      }
    ]
  },
  {
    path: '/user/:id',
    component: () => import('../src/components/User'),
    meta: {
      title: '用户'
    }
  },
  {
    path: '/router1/id=:id',
    component: BtnRouter,
    meta: {
      title: 'router1'
    }
  },
  {
    path: '/router2',
    component: BtnRouter2,
    meta: {
      title: 'router2'
    }
  }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

/* 
    全局导航守卫
*/
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});
export default router;
