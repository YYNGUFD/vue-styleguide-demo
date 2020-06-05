<template>
  <div class="exam">
    <p class="txt">示例：</p>
    <p class="txt txt1">全局loading:</p>
    <div @click="doClick" class="btn">点我试一试</div>
    <p class="txt txt1">局部loading:</p>
    <div @click="doClick1" class="btn">点我试一试</div>
    <rLoading type="0" v-if="show"></rLoading>
  </div>
</template>
<script>
import Vue from 'vue'
import loading from './index.js'
Vue.use(loading)
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    doClick () {
      let loading1 = this.$loading({
        propsData: {
          msg: '3s后消失'
        }
      })
      setTimeout(() => loading1.remove(), 3000)
    },
    doClick1 () {
      this.show = true
    }
  }
}
</script>
<style scoped>
.exam .txt {
  margin: 15px 0;
  font-size: 16px;
  font-weight: bold;
  color: navy;
}
.exam .txt1 {
  color: royalblue;
}
.exam .btn {
  width: 90px;
  padding: 10px;
  border: 1px solid pink;
  background: #fff;
  font-size: 14px;
  color: palevioletred;
  text-align: center;
}
</style>