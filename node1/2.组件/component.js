/* 
    组件开发
*/
// 创建模板
var temp = Vue.extend({
  template: `<div>
          <h2>hello world</h2>
      </div>`
});
// 注册全局模板
Vue.component('temp', temp);
// var vm = new Vue({
//   el: "#app",
// });

/* 子组件 */
var temp2 = Vue.extend({
  template: `<span style="font-weight:600;">{{text}}</span>`,
  props: {
    text: String
  }
});
// 父组件
var temp1 = Vue.extend({
  template: `<div>
        <h2>template</h2>
        <temp2 :text=text></temp2>   
    </div>`,
  components: {
    temp2
  },
  data() {
    return {
      text: 'child component temp2'
    };
  }
});
Vue.component('temp3', {
  template: `<em>temp3</em>`
});

// <script type="text/x-template" id="temp4">
//   <div>
//     <h1>hello vue</h1>
//   </div>
// </script>;
Vue.component('temp4', {
  template: '#temp4'
});

var vm = new Vue({
  el: '#app',
  components: {
    temp1,
    temp5: {
      template: '#temp5'
    }
  }
});

