<template>
  <div :class="'r-loading r-loading-'+type" @touchmove.stop.prevent>
    <div class="r-loading-content" @touchmove.stop.prevent>
      <div class="r-loading-svg">
        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30">
          <rect y="13" rx="2" ry="2" width="4" height="5" :fill="fillColor">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin="0s"
              dur=".6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin="0s"
              dur=".6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="10" y="13" rx="2" ry="2" width="4" height="5" :fill="fillColor">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin=".15s"
              dur=".6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin=".15s"
              dur=".6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="20" y="13" rx="2" ry="2" width="4" height="5" :fill="fillColor">
            <animate
              attributeName="height"
              attributeType="XML"
              values="5;21;5"
              begin=".3s"
              dur=".6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="13; 5; 13"
              begin=".3s"
              dur=".6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
      <div class="r-loading-text" v-if="type==1" v-html="msg"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rLoading",
  props: {
    msg: {
      type: String,
      default: '加载中'
    },
    type: {
      type: [String, Number],
      default: 1
    }
  },
  computed: {
    fillColor () {
      return this.type == 1 ? "#ff3261" : "#E8E8E8";
    }
  },
  created () {
    //全局仅有一个loading，把别的loading清掉
    if (document.querySelectorAll(".r-loading")) {
      let eles = document.querySelectorAll(".r-loading");
      for (var i = 0; i < eles.length; i++) {
        eles[i].remove();
      }
    }
  },
  methods: {
    remove () {
      this.$el.remove();
      this.$destroy();
    }
  }
}
</script>
<style lang='scss'>
@import "./index.scss";
</style>
<docs>
 
```jsx static
  
    var loading = that.$loading({
      propsData: {
        message: "要展示的信息"
      }
    }) 
    loading && loading.remove()
```

</docs>