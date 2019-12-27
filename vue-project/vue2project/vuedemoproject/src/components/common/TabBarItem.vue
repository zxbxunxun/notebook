<template>
  <div class="tab-bar-item active">
    <div class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    activeColor: {
      type: String,
      default() {
        return 'red';
      }
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
}
.item-icon {
  margin-top: 6px;
}
.item-icon .icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.item-text {
  font-size: 10px;
}
.active{
  color: #2d8330;
}
</style>
