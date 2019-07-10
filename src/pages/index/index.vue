<template>
  <div>
    <searchbar></searchbar>
    <div class="maindiv">
      <video src="https://poer44.xyz/static/video/test.mp4" class="videodiv" autoplay="true" loop="true"
             controls="false"/>
      <div v-for="(item,index) in rowdata" :key="index">
        <div class="divrow" @click="godetail">
          <div class="titlespan">
            <span class="title">{{item.name}}</span>
            <span class="smalltitle">{{item.word}}</span>
          </div>
          <div class="imgdiv">
            <img src="https://poer44.xyz/static/icon/money.png">
          </div>
        </div>
      </div>
      <div class="bottom">{{loading}}</div>
    </div>
  </div>
</template>

<script>
  import searchbar from '@/components/searchbar'

  export default {
    data () {
      return {
        size: 10,
        current: 1,
        rowdata: [],
        loading: '加载中...'
      }
    },

    components: {
      searchbar
    },

    methods: {
      getdata () {
        const _this = this
        _this.loading = '加载中...'
        this.$http.get('/api/productPage', {current: _this.current, size: _this.size}).then((d) => {
          let data = d.data.records
          _this.rowdata = data
          _this.loading = '已经到底啦'
        }).catch(err => {
          _this.loading = err.status + err.message
        })
      },
      godetail () {
        wx.navigateTo({
          url: '../detail/main'
        })
      }
    },
    mounted () {
      this.getdata()
    },
    onPullDownRefresh () {
      // 停止下拉刷新
      wx.stopPullDownRefresh()
    },
    // 上拉加载
    onReachBottom () {
      this.current = this.current + 1
      this.getdata()
    },
    created () {
      // let app = getApp()
    }
  }
</script>

<style scoped>
  @import "./style.scss";
</style>
