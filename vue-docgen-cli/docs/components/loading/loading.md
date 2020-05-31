# rLoading

## Props

| Prop name | Description | Type           | Values | Default  |
| --------- | ----------- | -------------- | ------ | -------- |
| msg       |             | string         | -      | '加载中' |
| type      |             | string\|number | -      | 1        |

---

```jsx static
var loading = that.$loading({
  propsData: {
    message: "要展示的信息"
  }
});
loading && loading.remove();
```
