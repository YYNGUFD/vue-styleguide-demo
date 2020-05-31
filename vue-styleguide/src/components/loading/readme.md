# 使用方法
```jsx static
import loading from "Loading_Component_Path"
Vue.use(loading)
```

```jsx static
//页面loading
let loading = this.$loading(); //显示
loading.remove(); //删除

```
```jsx static
//加载更多loading
<rLoading></rLoading>
```
* 原型链上挂载的是页面loading浮层， this.$loading()
* 下拉加载更多,页面塞全局组件rLoading