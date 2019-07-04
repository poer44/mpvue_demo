<template>
  <div class="main">
    <div class="inner">
    <image src="https://poer44.xyz/static/icon/success.png"  class="imgicon"/>
      <p class="main-title">下单成功！</p>
      <p>您的订单将在2019-07-01~2019-07-02为您送出，请您留意短信通知</p>
      <button @click="goorderdetail">查看订单详情</button>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    methods: {
      goorderdetail () {
        wx.redirectTo({
          url: '../orderdetail/main'
        })
      }
    },
    data: {}
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

