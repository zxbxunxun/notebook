<template>
  <div id="app">
    <router-link to="/home">HOME</router-link>
    <router-link :to="'/user/' + userName">USER</router-link>
    <button @click="toRouter1">router1</button>
    <button @click="toRouter2">router2</button>
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userName: 'weenie'
    };
  },
  methods: {
    toRouter1: function() {
      // param 占位符传参
      this.$router.replace(`/router1/id=${13212}`);
    },
    toRouter2: function() {
      // query传参
      this.$router.push({
        path: '/router2',
        query: {
          name: 'weenie',
          id: '11321'
        }
      });
    }
  }
};
</script>

<style></style>
