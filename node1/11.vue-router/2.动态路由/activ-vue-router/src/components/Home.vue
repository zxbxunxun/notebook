<template>
  <div>
    <h2>Home</h2>
    <p>Home page</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      path: '/home/news'
    };
  },
  activated() {
    window.console.log('active');
    this.$router.push(this.path);
  },
  // 组件内路由
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    window.console.log(this.path);
    next();
  }
};
</script>

<style></style>
