<template>
  <div>
    <div class="touxiang">
      <div class="paddingdiv">
        <image src="https://localhost/static/icon/default.png" class="timg"></image>
        <div>
          <p>小兔兔</p>
          <p>13888888888</p>
          <p>1 笔订单进行中</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div @click="goorder">我的订单</div>
      <div @click="goaddress">我的地址</div>
      <div>联系商家</div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    methods: {
      goorder () {
        wx.navigateTo({
          url: '../orderlist/main'
        })
      },
      goaddress () {
        wx.navigateTo({
          url: '../addresslist/main'
        })
      }
      // ,goconnect: function godetail() {
      //   wx.navigateTo({
      //     url: '../connect/main'
      //   });
      // }
    },
    data: {}
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

