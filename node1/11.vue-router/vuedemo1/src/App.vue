<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
* {
  color: rgba(0, 0, 0, 0.8);
}
body,
div,
p,
ul {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  /* border-bottom: 2px solid rgba(255, 255, 255, 0.2); */
}
a.active {
  border-bottom: 2px solid rgba(255, 0, 0, 0.2);
  color: rgba(255, 0, 0, 0.7);
}
a:hover {
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
</style>
