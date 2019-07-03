<template>
  <div class="main">
    <button @click="editaddress">
      新增地址
    </button>
    <div @click="editaddress" class="row">
      <div class="address">
        <p>闽南师范大学达理9a919</p>
        <p>小兔兔 13888888888</p>
      </div>
      <image src="https://localhost/static/icon/edit.png" class="pen"/>
    </div>
    <div @click="editaddress" class="row">
      <div class="address">
        <p>闽南师范大学达理9a918</p>
        <p>小挠斧 13888888888</p>
      </div>
      <image src="https://localhost/static/icon/edit.png" class="pen"/>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    methods: {
      editaddress () {
        wx.navigateTo({
          url: '../address/main'
        })
      }
    },
    data: {}
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

