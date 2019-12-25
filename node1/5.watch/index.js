// 组件对象
const temp = {
  template: '#temp',
  props: {
    number1: Number,
    number2: Number
  },
  data() {
    return {
      numb1: this.number1,
      numb2: this.number2,
      total: this.number1 + this.number2
    };
  },
  watch: {
    numb1: function(value) {
      this.numb1 = Number(value);
      this.$emit('changenumber1', this.numb1);
      this.numb2 = this.numb1 - 100;
      this.$emit('changenumber2', this.numb2);
      this.total = this.numb1 + this.numb2;
      console.log(this.$root);
    },
    numb2: function(value) {
      this.numb2 = Number(value);
      this.$emit('changenumber2', this.numb2);
      this.numb1 = this.numb2 + 100;
      this.$emit('changenumber1', this.numb1);
      this.total = this.numb1 + this.numb2;
    }
  }
};

// vue实例对象
const vm = new Vue({
  el: '#app',
  data: {
    num1: 0,
    num2: 1
  },
  components: {
    temp: temp
  },
  methods: {
    changenumber1: function(val) {
      this.num1 = val;
      console.log(this.$children);
    },
    changenumber2: function(val) {
      this.num2 = val;
      console.log(this.$refs);
    }
  }
});
