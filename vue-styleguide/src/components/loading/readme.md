#### 使用方法

```js static
import loading from 'Loading_Component_Path'
Vue.use(loading)
```

loading, use default message '加载中'

```js static
let loading = this.$loading()
loading.remove() //删除loading实例
```

loading, use custome message

```js static
let loading1 = this.$loading({
  propsData: {
    msg: '支付时间较长，预计5s结束'
  }
})
loading1.remove() //删除loading实例
```

页面内加载更多 loading

```html
<rLoading></rLoading>
```

```[import](./example.vue)
Text typed here will be entirely ignored. You can use it to describe the example imported for maintenance purposes
```
