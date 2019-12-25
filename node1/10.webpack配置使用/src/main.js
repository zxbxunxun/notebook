import sum from './js/module1';
import { functionName } from './js/module1';
console.log(sum(1, 2));
// import index from './css/index.css';
require('./css/index.css')
console.log(functionName)

import Vue from 'vue'
import TestDemo from './vue/TestDemo.vue'
new Vue({
  el: '#app',
  data: {
    message: 'hello vue'
  },
  template: '<TestDemo></TestDemo>',
  components: {
    TestDemo
  }
});
