<template>
  <div class="cart">
    <div class="nowaddress">
      闽南师范大学 达理3a313
      小兔兔
      13888888888
    </div>
    <button @click="goaddress" class="wx">新增地址</button>
    <div class="top">
      <div>现在下单，明天开始计算日期并发货~</div>
    </div>
    <div class="cartlist">
      <div class="item">
        <div class="con">
          <div class="left">
            <div class="img">
              <img  src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
            </div>
            <div class="info">
              <p>鸡你太美</p>
              <p>￥10/天</p>
              <picker :value="selectedIndex" :range="messagess">
                <view class="picker">{{ messagess[selectedIndex] }}</view>
              </picker>
            </div>
          </div>
        </div>


      </div>
    </div>
    <div v-if="false" class="nogoods">
      <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
    </div>
    <div class="fixed">
      <div class="right">
        <div>
          ￥123
        </div>
        <div>下单</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    methods: {
      goaddress () {
        wx.navigateTo({
          url: '../address/main'
        })
      }
    },
    data: {
      selectedIndex: 0,
      messagess: ['一星期', '一个月']
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

