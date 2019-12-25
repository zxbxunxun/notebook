<template>
  <div>
    <h2>Home</h2>
    <p>Home page</p>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>

<style></style>
