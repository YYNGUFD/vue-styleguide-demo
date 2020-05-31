# CounterButton

> Button that counts how many times it was pressed and exposes a `@public` method to reset itself.

## Props

| Prop name | Description | Type   | Values   | Default |
| --------- | ----------- | ------ | -------- | ------- |
| number    |             | number | `8`, `3` | 33      |

## Methods

### publicMethod

> Sets the order

#### Params

| Param name | Type   | Description  |
| ---------- | ------ | ------------ |
| key        | string | Key to order |

#### Return

| Type   | Description |
| ------ | ----------- |
| string | Test        |

## Events

| Event name | Type   | Description           |
| ---------- | ------ | --------------------- |
| after      | number | After increment event |

---

Use vue live right here too

````markdown
```vue live
<CounterButton />
```

```html
<button>I’m transparent!</button>
```
````
