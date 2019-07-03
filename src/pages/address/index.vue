<template>
  <div class="addaddress">
    <div class="item">
      <input type="text" placeholder="姓名">
    </div>
    <div class="item">
      <input type="text" placeholder="手机号码">
    </div>
    <div class="item">
      <input type="text" placeholder="详细地址，如楼道、楼盘号等" >
    </div>
    <div class="item itemend">
      <checkbox-group>
        <label class="checkbox">
          <checkbox class="box" value="true"  color="#3F8ECA" />设置为默认地址
        </label>
      </checkbox-group>
    </div>
    <div class="bottom">
      新增
    </div>
  </div>

</template>

<script>
  export default {
    computed: {},
    methods: {}
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

