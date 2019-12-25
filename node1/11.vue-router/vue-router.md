# 前端路由

> 前端路由是 url 与组件的映射表管理

## 单一页面富应用 SPA

1.单一页面富应用，通常在静态服务器端只对应单一 html

2.通常在初次请求时拿到全部 css js

3.用户切换页面时，通过路由映射表切换到对应组件

## 如何修改 Url 而不请求全部资源

1.HTML5 history 对象

2.location.hash 方法

### HTML5 history 对象

- history.pushState({},'',url)

- history.back()

- history.go(-1) 对应 history.back()

- history.go(1) 对应 history.forward()

### location.hash 方法

- localtion.has=url
