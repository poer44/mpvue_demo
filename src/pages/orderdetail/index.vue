<template>
  <div class="app">
    <div class="status">卖家已接单</div>
    <p class="title">订单信息</p>
    <div class="orderdetail">
      <p>订单编号：2019070101010011</p>
      <p>下单时间：2019-07-01 10:00:00</p>
      <p>实付：￥88</p>
      <p>订单备注：沙拉多加一点</p>
    </div>
    <div class="call">联系商家</div>
    <p class="title">订单流转</p>
    <div>
      <div class="timeline">
        <p><span class="bluecircle"> ○ </span><span class="time">2019-07-02 12:30:00 </span>
        <p class="detail">餐已签收</p></p>
        <p><span class="bluecircle"> ○ </span><span class="time">2019-07-02 11:30:00</span>
        <p class="detail">餐已于 2019-07-02 12:00 发出，派送联系电话：13888888888</p></p>
        <p><span class="bluecircle"> ○ </span><span class="time">2019-07-01 19:30:00</span>
        <p class="detail">在线支付成功！订单2019-07-02开始配送</p></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    methods: {},
    data: {}
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

