<template>
  <TabBar>
    <!-- 传递默认属性值 -->
    <!-- 非import导入 路径需要设置~ -->
    <TabBarItem path="/home" activeColor="rgb(52, 151, 52)">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/home.active.svg" alt="" />
      <div slot="item-text">
        <span>首页</span>
      </div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="rgb(52, 151, 52)">
      <img slot="item-icon" src="~assets/img/tabbar/grid.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/grid.active.svg" alt="" />
      <div slot="item-text">
        <span>分类</span>
      </div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="rgb(52, 151, 52)">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/cart.active.svg" alt="" />
      <div slot="item-text">
        <span>购物车</span>
      </div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="rgb(52, 151, 52)">
      <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="" />
      <img slot="item-icon-active" src="~assets/img/tabbar/user.active.svg" alt="" />
      <div slot="item-text">
        <span>我的</span>
      </div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from 'components/tabBar/TabBar';
import TabBarItem from 'components/tabBar/TabBarItem';
export default {
  name: 'mainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
