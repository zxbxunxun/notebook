// 普通插槽
const temp = {
  template: '#temp'
};

// 具名插槽
const temp1 = {
  template: '#temp1'
};

// 作用域插槽，数据在插槽中，但父组件控制器呈现
const temp2 = {
  template: '#temp2',
  data() {
    return {
      movies: ['海上钢琴师', '肖申克的救赎', '大话西游', '重庆森林']
    };
  }
};

const temp3 = {
  template: '#temp3',
  data() {
    return {
      movies: ['海上钢琴师', '肖申克的救赎', '大话西游', '重庆森林']
    };
  }
};

// vue实例
const vm = new Vue({
  el: '#app',
  components: {
    temp,
    temp1,
    temp2,
    temp3
  }
});
