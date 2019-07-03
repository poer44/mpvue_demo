<template>
  <div class="cart">
    <div class="nowaddress">
      <div class="img-left">
        <image src="https://localhost/static/icon/location.png"/>
      </div>
      <div class="main-address">
        <p class="address">漳州大学 达理9A919</p>
        <p class="userinfo">小兔兔 13888888888</p>
      </div>
    </div>
    <button @click="goaddress" class="wx">新增地址</button>
    <div class="top">
      <div>现在下单，明天开始发货~</div>
    </div>
    <div class="cartlist">
      <p class="pclass"><image src="https://localhost/static/icon/shop.png"  class="imgicon"/>商品：</p>
      <div class="item">
        <div class="con">
          <div class="left">
            <div class="img">
              <img
                src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png"
                alt="">
            </div>
            <div class="info">
              <p>鸡你太美</p>
              <p>￥10/天</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="pclass"><image src="https://localhost/static/icon/time.png"  class="imgicon"/>订购时间：</p>
        <div>
          <picker :value="selectedIndex" :range="messagess">
            <view class="picker">{{ messagess[selectedIndex] }}</view>
          </picker>
        </div>
      </div>
      <p class="pclass"><image src="https://localhost/static/icon/remark.png"  class="imgicon"/>备注：</p>
      <div>
        <textarea class="remark"/>
      </div>
    </div>
    <div v-if="false" class="nogoods">
      <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png"
           alt="">
    </div>
    <div class="fixed">
      <div class="left">
        合计：￥123
      </div>
      <div class="right">
        <button @click="putorder">下单</button>
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
      },
      putorder () {
        wx.navigateTo({
          url: '../success/main'
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

