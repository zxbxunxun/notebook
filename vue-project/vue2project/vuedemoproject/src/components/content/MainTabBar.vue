<template>
  <div>
    <TabBar>
      <TabBarItem activeColor="#2d8330">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        <span slot="item-text">爱心</span>
      </TabBarItem>
      <TabBarItem activeColor="#2d8330">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        <span slot="item-text">爱心</span>
      </TabBarItem>
      <TabBarItem activeColor="#2d8330">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        <span slot="item-text">爱心</span>
      </TabBarItem>
      <TabBarItem activeColor="#2d8330">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        <span slot="item-text">爱心</span>
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
