<template>
  <div v-if="leftValue && rightValue">
    <div class="r-define" v-if="preRender" :style="allStyle" ref="pre">
      <div :style="leftStyle" ref="pre-left" class="f">{{ leftValue }}</div>
      <div :style="rightStyle" ref="pre-right" class="f">{{ rightValue }}</div>
    </div>
    <div class="r-define" v-else :style="newLayoutStyle" ref="nex">
      <div :style="newLeftStyle" class="l">{{ leftValue }}</div>
      <div :style="newRightStyle" class="r">{{ rightValue }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'rLayout',
  props: {
    /**
     * 当前组件的值
     */
    attrs: {
      type: Object,
      default: function () {
        return {};
      }
    },
  },
  data() {
    return {
      leftStyle: {},
      rightStyle: {},
      allStyle: {},
      leftValue: '',
      rightValue: '',
      preRender: true,
      newLayoutStyle: {},
      newLeftStyle: {},
      newRightStyle: {}
    }
  },
  created() {
    Object.assign(this.$data, this.attrs)
  },
  mounted() {
    this.$nextTick(() => {
      this.initLayout()
    })
  },
  methods: {
    initLayout() {
      this.newLayoutStyle = Object.assign(this.allStyle, {
        display: '-webkit-box',
        display: '-webkit-flex',
        display: 'flex',
        'align-items': 'flex-start',
        'justify-content': 'space-between'
      })
      let refs = this.$refs,
        pEle = refs.pre,
        lEle = refs['pre-left'],
        rEle = refs['pre-right'],
        pWidth = pEle && pEle.clientWidth,
        lWidth = lEle && lEle.clientWidth,
        rWidth = rEle && rEle.clientWidth,
        isInOneLine = lWidth + rWidth + 60 <= pWidth,
        lgtHalf = lWidth > pWidth / 2 - 30,
        rgtHalf = rWidth > pWidth / 2 - 30
      //写30px是为了不被适配
      let ml = { 'margin-left': '30px' },
        mr = { 'margin-right': '30px' }
      if (isInOneLine) {
        let lHalfStyle = { '-webkit-box-flex': 1 },
          flex1 = { flex: 1 },
          ls = {},
          rs = {}

        //如果左侧行超过一半
        if (lgtHalf) {
          ls = flex1
        }
        //如果右侧行超过一半
        if (rgtHalf) {
          rs = flex1
        }
        //均未超过一半
        if (!lgtHalf && !rgtHalf) {
          ls = rs = flex1
        }
        //一行可以放下
        this.newLeftStyle = Object.assign(this.leftStyle, lHalfStyle, ls, mr)
        this.newRightStyle = Object.assign(this.rightStyle, lHalfStyle, rs, ml)
      } else {
        //超过半行那一边的样式
        let gtHalfStyle = {
          '-webkit-box-flex': 1,
          flex: 1,
          'word-break': 'break-all',
          'white-space': 'pre-wrap'
        }

        //需要折行
        if (lgtHalf && !rgtHalf) {
          //左侧大于一半，左侧折行
          this.newLeftStyle = Object.assign(this.leftStyle, gtHalfStyle, mr)
          this.newRightStyle = Object.assign(this.rightStyle, ml)
        }

        if (!lgtHalf && rgtHalf) {
          //左侧大于一半，左侧折行
          this.newLeftStyle = Object.assign(this.leftStyle, mr)
          this.newRightStyle = Object.assign(this.rightStyle, gtHalfStyle, ml)
        }

        if (lgtHalf && rgtHalf) {
          this.newLeftStyle = Object.assign(this.leftStyle, gtHalfStyle, mr)
          this.newRightStyle = Object.assign(this.rightStyle, gtHalfStyle, ml)
        }
      }
      this.preRender = false
    }
  }
}
</script>
<style scoped lang="scss">
@function r($px) {
  @return $px/18.75 * 1rem;
}
.l {
  text-align: left;
}
.r {
  text-align: right;
}
.f {
  float: left;
}
.r-define {
  font-size: r(14);
  line-height: r(20);
  color: #2c3e50;
}
</style>
