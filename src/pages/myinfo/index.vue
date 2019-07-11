<template>
  <div>
    <div class="touxiang">
      <div class="paddingdiv">
        <image :src="usr.avatarUrl" class="timg"></image>
        <div>
          <p v-if="!usr.nickName" @click="gologin">请登录</p>
          <p v-if="usr.nickName">{{usr.nickName}}</p>
          <p v-if="usr.nickName">1 笔订单进行中</p>
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
    data: {
      usr: {
        nickName: '',
        avatarUrl: 'https://poer44.xyz/static/icon/default.png'
      }
    },
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
      },
      gologin () {
        wx.navigateTo({
          url: '../login/main'
        })
      }
      // ,goconnect: function godetail() {
      //   wx.navigateTo({
      //     url: '../connect/main'
      //   });
      // }
    },
    onShow () {
      const _this = this
      wx.getUserInfo({
        success: function (res) {
          const userInfo = res.userInfo
          _this.usr.nickName = userInfo.nickName
          _this.usr.avatarUrl = userInfo.avatarUrl
        }
      })
    },
    mounted () {
      const _this = this
      wx.getUserInfo({
        success: function (res) {
          const userInfo = res.userInfo
          _this.usr.nickName = userInfo.nickName
          _this.usr.avatarUrl = userInfo.avatarUrl
        }
      })
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

