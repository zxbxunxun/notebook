<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar'
};
</script>

<style>
.tab-bar {
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  text-align: center;
  display: flex;
  box-shadow: 0 9px 20px rgba(100, 100, 100, 0.2);
}
</style>
