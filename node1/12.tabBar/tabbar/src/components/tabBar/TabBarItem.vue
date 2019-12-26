<template>
  <div class="tab-bar-item" @click="go2Route">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    path: String, // 路由地址
    // 激活状态样式
    activeColor: {
      type: String,
      default() {
        return 'red';
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive && { color: this.activeColor };
    }
  },
  methods: {
    go2Route: function() {
      // 路由跳转
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 10px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 8px;
}
</style>
