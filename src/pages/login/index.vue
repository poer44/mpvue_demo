<template>
  <div class="app">
    <div>
      <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取用户信息</button>
    </div>
    <div>
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取用户手机</button>
    </div>
  </div>
</template>

<script>
  import store from '../../stores/store'
  export default {
    computed: {},
    methods: {},
    data: {},
    mounted () {
      wx.login({
        success (res) {
          if (res.code) {
            // 这里可以把code传给后台，后台用此获取openid及session_key
            store.commit('setCode', res.code)
          }
        }
      })
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

