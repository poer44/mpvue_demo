<template>
  <div>
    <searchbar></searchbar>
    <div class="maindiv">
    <video src="https://poer44.xyz/static/video/test.mp4" class="videodiv" autoplay="true" loop="true" controls="false"/>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
    </div>
  </div>
</template>

<script>
  import searchbar from '@/components/searchbar'
  import row from '@/components/row'

  export default {
    data () {
      return {}
    },

    components: {
      searchbar, row
    },

    methods: {},

    onPullDownRefresh () {
      // 停止下拉刷新
      wx.stopPullDownRefresh()
    },
    // 上拉加载
    onReachBottom () {
      console.log('bottom')
    },
    created () {
      // let app = getApp()
    }
  }
</script>

<style scoped>
  .videodiv {
    width: 100%;
  }
  .maindiv{
    margin-top:100rpx;
  }
</style>
