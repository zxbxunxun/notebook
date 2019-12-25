import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import About from '../components/About';
// 路由映射
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});
export default router;
