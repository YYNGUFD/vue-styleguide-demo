<template>
	<div class="Button">
		<button class="button" @click.prevent="onClick" :style="{ color: color, fontSize: fontSize }">
			<!-- @slot 暴露出的插槽  
                @binding {object}  text text of the menu item
      -->
			<slot name ='test' :text='fontSize'> </slot>
     
      <button @click="click">点击</button>
		</button>
	</div>
</template>

<script>
/**
 * The only true button.
 */
export default {
	name: 'Button',
	props: {
		/**
		 * The color for the button.
		 */
		color: {
			type: String,
			default: '#333'
		},
		/**
		 * The size of the button 其他的东西ddd 
		 * @values small, normal, large,ls
     *
		 */
		size: {
			type: String,
			default: 'normal'
		},
		/**
		 * Gets called when the user clicks on the button
		 * @ignore
		 */
		onClick: {
			type: Function,
			default: event => {
				console.log('You have clicked me!', event.target)
			}
		}
	},
	computed: {
		fontSize() {
			let size
			switch (this.size) {
				case 'small':
					size = '10px'
					break
				case 'normal':
					size = '14px'
					break
				case 'large':
					size = '18px'
					break
			}
			return size
		}
  },
  methods:{
    click(){
      /**
       * 按钮点击成功emit事件
       * @event click
       * @property {number} newVal new value set
       * @property {number} oldVal new value set
       * @params  {number} newVal 
       */
      this.$emit("click",newVal,oldVal)
      
    }
  }
}
</script>

<style scope> 
.checks {
	background-image: linear-gradient(45deg, #f5f5f5 25%, transparent 25%),
		linear-gradient(-45deg, #f5f5f5 25%, transparent 25%),
		linear-gradient(45deg, transparent 75%, #f5f5f5 75%),
		linear-gradient(-45deg, transparent 75%, #f5f5f5 75%);
	background-size: 16px 16px;
	background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
}
</style>
<docs>

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
<Button>I’m transparent!</Button>
```

</docs>
