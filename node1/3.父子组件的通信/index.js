/* 
    父子组件的通信
    两种方式：props | $emit event
*/

// 1.父组件与子组件通信 props 接收 v-bind传递
/* 
    props : [] | {}
*/
const temp1 = {
  template: '#temp',
  props: ['cmovies', 'cmessage'] // 数组形式，存储变量名
};

const temp2 = {
  template: '#temp',
  props: {
    /* 
        父组件向子组件通信 props接收对象
    */
    cmovies: Array, // 类型检查
    cmessage: String // 类型检查
  }
};

const temp3 = {
  template: '#temp',
  props: {
    /* 
        检查类型并设置通信数据是否必须传递
        不能使用驼峰标识符
    */
    cmovies: {
      type: Array,
      required: true // 确定该属性值必须传递
    },
    cmessage: {
      type: String
    }
  }
};

const temp = {
  template: '#temp',
  props: {
    cmovies: {
      type: Array, // 通信数据类型检查
      required: true, // 通信数据是否必须
      default() {
        return [];
      }
      //   default: []
    },
    cmessage: {
      type: String,
      default: 'this is a vue project.' // 设置默认值
    }
  }
};

const comp = {
  template: '#comp',
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    clickItem(item) {
      console.log(item);
      //   子组件通知父组件事件
      this.$emit('clickCategory', item);
    }
  }
};

const count = {
  template: '#count',
  props: {
    counter: {
      type: Number,
      required: true
    }
  },
  methods: {
    increment(count) {
      console.log(count);
      this.$emit('incrementclick', this.counter);
    },
    decrement(count, event) {
      console.log(count);
      console.log(event);
      this.$emit('decrementclick', this.counter);
    }
  }
};

const vm = new Vue({
  data: {
    movies: ['海上钢琴师', '飞越疯人院', '杀死比尔'],
    messages: 'hello, this is a vue project',
    categories: [
      { id: 1, name: '家用电器' },
      { id: 2, name: '生活用品' },
      { id: 3, name: '居家旅行' },
      { id: 4, name: '办公电脑' }
    ],
    count: 0
  },
  components: {
    temp,
    comp,
    count
  },
  methods: {
    clickCategory(item) {
      console.log(item);
    },
    incrementclick() {
      this.count++;
    },
    decrementclick() {
      this.count--;
    }
  }
}).$mount('#app');
// 2.子组件与父组件通信 $emit event 通过自定义事件 向父组件发送消息
