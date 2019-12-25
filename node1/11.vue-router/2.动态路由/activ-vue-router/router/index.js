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
    children: [
      {
        path: 'news',
        component: () => import('../src/components/HomeNews')
      },
      {
        path: 'message',
        component: () => import('./../src/components/HomeMessage')
      }
    ]
  },
  {
    path: '/user/:id',
    component: () => import('../src/components/User')
  },
  {
    path: '/router1/id=:id',
    component: BtnRouter
  },
  {
    path: '/router2',
    component: BtnRouter2
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
export default router;
