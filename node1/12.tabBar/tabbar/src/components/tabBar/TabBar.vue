<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  components: {}
};
</script>

<style>
#tabBar {
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  display: flex;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.01);
}
</style>
