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
      <div>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取用户手机</button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../../stores/store'
  export default {
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
        let code = store.state.code
        this.$http.get('/wx/login', {js_code: code}).then((d) => {
          // 输出请求数据
          console.log(d.data)
          // 输出响应头
          console.log(d.header)
        }).catch(err => {
          console.log(err.status, err.message)
        })
        let usrinfo = e.mp.detail.userInfo
        console.log(usrinfo)
        this.usr.nickName = usrinfo.nickName
        this.usr.imgsrc = usrinfo.avatarUrl
      },
      getPhoneNumber (e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
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

