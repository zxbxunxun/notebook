<template>
  <div>
    <h2>this is a vue project</h2>
    <p>{{ message }}</p>
    <Demo></Demo>
    <h3>这是一个Webpack测试服务器</h3>
    <WebpackDemo></WebpackDemo>
  </div>
</template>

<script>
import Demo from './Demo.vue';
import WebpackDemo from './WebpackDemo.vue';
export default {
  name: 'TestDemo',
  props: {
    message: {
      type: String,
      default() {
        return 'this is a test project';
      }
    }
  },
  components: {
    Demo,
    WebpackDemo
  }
};
</script>

<style></style>
