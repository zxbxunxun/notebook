import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/* 
    路由懒加载
*/
const Home = () => import('./../src/components/Home');
const User = () => import('../src/components/User');
const Router1 = () => import('./../src/components/BtnRouter');
const Router2 = () => import('./../src/components/BtnRouter2');
const News = () => import('./../src/components/HomeNews');
const Message = () => import('./../src/components/HomeMessage');

// 重写push方法，否则相同地址报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
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
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/user/id=:id',
    component: User
  },
  {
    path: '/router1/id=:id',
    component: Router1
  },
  {
    path: '/router2',
    component: Router2
  }
];
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});
export default router;
