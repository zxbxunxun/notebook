const temp = {
  template: '#temp',
  props: {
    number1: Number,
    number2: Number
  },
  data() {
    return {
      numbers1: this.number1,
      numbers2: this.number2
    };
  },
  methods: {
    inputNum1: function(event) {
      this.numbers1 = event.target.value * 1;
      //   通知父组件更新data
      this.$emit('changenum1', this.numbers1);
      this.numbers2 = this.numbers1 * 100;
      this.$emit('changenum2', this.numbers2);
    },
    inputNum2: function(event) {
      this.numbers2 = event.target.value * 1;
      this.$emit('changenum2', this.numbers2);
      this.numbers1 = this.numbers2 / 100;
      this.$emit('changenum2', this.numbers1);
    }
  }
};

const vm = new Vue({
  el: '#app',
  data: {
    num1: 0,
    num2: 1
  },
  components: {
    temp
  },
  methods: {
    pChangeNum1: function(num1) {
      this.num1 = num1;
    },
    pChangeNum2: function(num2) {
      this.num2 = num2;
    }
  }
});
