<template>
  <div>
    <TabBar>
      <TabBarItem path="/home">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <span slot="item-text">首页</span>
      </TabBarItem>
      <TabBarItem path="/category">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-all"></use>
        </svg>
        <span slot="item-text">分类</span>
      </TabBarItem>
      <TabBarItem path="/cart">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-dingdan"></use>
        </svg>
        <span slot="item-text">购物车</span>
      </TabBarItem>
      <TabBarItem path="/profile">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-wodeguanzhu"></use>
        </svg>
        <span slot="item-text">我的</span>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from 'components/common/TabBar';
import TabBarItem from 'components/common/TabBarItem';
export default {
  name: 'mainTabBar',
  components: {
    TabBarItem,
    TabBar
  }
};
</script>

<style></style>
