import Vue from 'vue';
import App from './App.vue';
// 引入icon图标
import './common/iconfont';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
