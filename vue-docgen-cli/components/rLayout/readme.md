### 两列布局

**目的**：为统一两列布局的样式，使布局更具有通用性，编写vue的相关组件进行统一化处理

**两列布局设计思路** ：

左右布局最小间隔 ：60px
当前左侧的宽度+右侧的宽度 +60px <=屏幕的宽度


**情况分类：**

- 左长右短 （一行可以展示不需折行）
- 左短右短 （一行展示）
- 左长右长  (居中折行展示)
- 左短右长  (一行展示不这行)


**判断影响折行条件**
左文字宽 + 30px + 30px +右文字宽 < 当前父元素宽度

- 字体文字 字体间距 
- 中文字符 英文字符
- 标点符号 表情符号


### 使用格式

传入组件内容
 @attrs 包含左右布局的样式 

列表属性 
* attrs 对象格式  必传属性 无内容时{}
* 左右内容默认样式 fontSize:14px lineHeight:20px 字体颜色"#666"
* 不传递时则展示默认样式
* 左右标题样式一样时 可传递定义allStyle 属性
* 单独定义左右内容样式时 可传leftStyle 或者 rightStyle

```js static
attrs:{
  leftStyle: {
    'font-size':'12px'
  },
  rightStyle: {
    'line-height':'20px'
  },
  allStyle: {
    'font-size':'12px',
    'line-height':'20px'
  },
  leftValue: '左侧内容',
  rightValue: '右侧内容',
} 

```

### 案例demo
* 左短+右短

``` jsx noeditor
 new Vue({
    data(){
      return {
        attrs:{
            leftValue: '左短',
            rightValue: '右短',
            allStyle:{
              width:'500px',
              border:'1px solid #000'
            }
        },
         attrs1:{
            leftValue: '左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长',
            rightValue: '右短右短',
        }
      }
    }, 
    template: `
     <rLayout  :attrs=attrs></rLayout>
     <rLayout  :attrs=attrs1></rLayout>
  `
})
```
* 左长+右短

```
 new Vue({
    data(){
      return { 
         attrs1:{
            leftValue: '左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长',
            rightValue: '右短右短',
            allStyle:{
              width:'500px',
              border:'1px solid #000'
            }
        }
      }
    }, 
    template: ` 
     <rLayout  :attrs=attrs1></rLayout>
  `
})
```
* 左短+右长

```
 new Vue({
    data(){
      return { 
         attrs1:{
            leftValue: '左短左短',
            rightValue: '右长右长右长右长右长右长右长右长右长右长右长右长右长右长右长右长右长右长',
            allStyle:{
              width:'500px',
              border:'1px solid #000'
            }
        }
      }
    }, 
    template: ` 
     <rLayout  :attrs=attrs1></rLayout>
  `
})
```

* 左长+右长

```
 new Vue({
    data(){
      return { 
         attrs1:{
            leftValue: '左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长左长',
            rightValue: '右长右长右长右长右长右长右长右长右长右长右长右长右长右长右长右长右长右长',
            allStyle:{
              width:'500px',
              border:'1px solid #000'
            }
        }
      }
    }, 
    template: ` 
     <rLayout  :attrs=attrs1></rLayout>
  `
})
```
```html 

 <rLayout  :attrs=attrs1></rLayout>
```

