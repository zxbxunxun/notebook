<template>
  <div>
    <h2>事件触发路由2</h2>
    <p>这是一个事件触发的路由跳转</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'btnrouter2'
};
</script>

<style></style>
