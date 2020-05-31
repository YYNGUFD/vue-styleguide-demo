<template>
	<div class="CounterButton">
		<button class="button" @click.prevent="increment">{{count}}</button>
	</div>
</template>

<script>
/**
 * Button that counts how many times it was pressed and exposes a `@public` method to reset itself.
 */
 
export default {
	name: 'CounterButton',
	data() {
		return { 
      /**
       * @props 我的天呢
       */
      count: 0
       }
  },
  props:{
    /**
     * @values 8,3
     */
    number:{
      type:Number,
      default:33
    }

  },
	methods: {
      /**
     * Sets the order
     *
     * @public
     * @version 1.0.5
     * @since Version 1.0.1
     * @param {string} key Key to order
     * @returns {string} Test
     */
    publicMethod(){
      console.log("其他的事件信息")

    },
		/**
		 * Increments the counter. This method is not marked @public and is not visible in the styleguide.
		 */
		increment() {
			this.count++
			/**
			 * After increment event
			 * @event after
			 * @type {number}
			 */
			this.$emit('after', this.count)
		}
	}
}
</script>
<docs>

Use vue live right here too

````markdown
```vue live
<CounterButton/>
```

```html
<Button>I’m transparent!</Button>
```
</docs>
