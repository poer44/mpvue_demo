<template>
  <div>
    <searchbar></searchbar>
    <scroll-view>

      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
      <row></row>
    </scroll-view>
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

</style>
