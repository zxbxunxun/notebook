import Vue from 'vue';
import App from './App.vue';
// 引入icon图标
import './common/iconfont';

// 路由
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
