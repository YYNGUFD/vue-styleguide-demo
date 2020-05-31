# Button

> The only true button.

## Props

| Prop name | Description                                    | Type   | Values                           | Default                                                               |
| --------- | ---------------------------------------------- | ------ | -------------------------------- | --------------------------------------------------------------------- |
| color     | The color for the button.                      | string | -                                | '#333'                                                                |
| size      | The size of the button 其他的东西 ddd          | string | `small`, `normal`, `large`, `ls` | 'normal'                                                              |
| onClick   | Gets called when the user clicks on the button | func   | -                                | event => {<br> console.log('You have clicked me!', event.target)<br>} |

## Events

| Event name | Type      | Description            |
| ---------- | --------- | ---------------------- |
| click      | undefined | 按钮点击成功 emit 事件 |

## Slots

| Name | Description  | Bindings                                                                                                                                            |
| ---- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| test | 暴露出的插槽 | [<br> {<br> "title": "binding",<br> "type": {<br> "name": "object"<br> },<br> "name": "text",<br> "description": "text of the menu item"<br> }<br>] |

---

Use vue live right here too

````markdown
```jsx live
<Button>I’m transparent!</Button>
```
````

```jsx live
<Button>I’m transparent!</Button>
```

To render an example as highlighted source code remove the live modifier

```html
<button>I’m transparent!</button>
```
