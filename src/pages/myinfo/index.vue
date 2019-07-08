<template>
  <div>
    <div class="touxiang">
      <div class="paddingdiv">
        <image :src="usr.imgsrc" class="timg"></image>
        <div>
          <p>{{usr.nickName}}</p>
          <p>1 笔订单进行中</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div @click="goorder">我的订单</div>
      <div @click="goaddress">我的地址</div>
      <div>联系商家</div>
      <div>
        <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取用户信息</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    data: {
      usr: {
        nickName: '-',
        imgsrc: 'https://poer44.xyz/static/icon/default.png'
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
      bindGetUserInfo (e) {
        let usrinfo = e.mp.detail.userInfo
        console.log(usrinfo)
        this.usr.nickName = usrinfo.nickName
        this.usr.imgsrc = usrinfo.avatarUrl
      }
      // ,goconnect: function godetail() {
      //   wx.navigateTo({
      //     url: '../connect/main'
      //   });
      // }
    },
    mounted () {
      wx.login({
        success (res) {
          if (res.code) {
            // 这里可以把code传给后台，后台用此获取openid及session_key
            debugger
          }
        }
      })
    }
  }
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>

