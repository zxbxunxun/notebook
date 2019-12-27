<template>
  <div id="app">
    <h2>学生名单</h2>
    <ul>
      <li v-for="(item, index) in students" :key="index">{{ item.name }}</li>
    </ul>
    <h2>根据年龄查询学生名单</h2>
    <div>
      <input type="text" name="" id="" v-model="age" @change.enter="searchStuByAge" />
      <span v-if="errMessage">{{ errMessage }}</span>
      <div v-if="ageStu.length">
        <span>检索结果为</span>
        <span v-for="(item, index) in ageStu" :key="index">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      students: this.$store.getters.getAgeStu,
      age: '',
      errMessage: '',
      ageStu: []
    };
  },
  methods: {
    searchStuByAge() {
      window.console.log(this.age);
      const age = Number(this.age);
      if (!isNaN(age)) {
        window.console.log(age);
        this.errMessage = '';
        this.ageStu = this.$store.getters.getStuByAge(age);
      } else {
        this.errMessage = '请输入数字';
        this.ageStu = [];
      }
    }
  }
};
</script>

<style></style>
