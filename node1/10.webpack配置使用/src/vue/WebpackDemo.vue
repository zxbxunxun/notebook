<template>
  <div class="wpd">
    <h2>Plugins</h2>
    <div class="pre">
      <p>webpack插件简述</p>
      <ul>
        <li v-for="(item, index) in plugins" :key="index">
          <span class="name">{{ item.name }}</span>
          <em>{{ item.des }}</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebpackDemo',
  data() {
    return {
      plugins: [
        { name: 'webpack.BannerPlugin', des: '描述信息' },
        {
          name: 'HtmlWebpackPlugin',
          des: '自动创建html并加载javascript'
        },
        {
          name: 'VueLoaderPlugin',
          des: 'vue-loader的依赖插件，解析 .vue 组件'
        },
        {
          name: 'UglifyjsWebPackPlugin',
          des: 'js压缩插件'
        }
      ]
    };
  }
};
</script>

<style>
    .wpd{
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    li>span{
        font-weight: 600;
        margin-right: 20px;
    }
    li>em{
        font-size: 14px;
        
    }
</style>
