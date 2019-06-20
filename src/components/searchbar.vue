<template>
  <div class="top">
    <div class="search_input" @click="goSearch"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      goSearch (ev) {
        const url = '../searchbar/main'
        mpvue.navigateTo({url})
      }
    }
  }
</script>

<style scoped>
  .top {
    width: 100%;
    height: 100rpx;
    position: absolute;
    top:0px;
    left:0px;
    background-color: #3F8ECA;
  }

  .search_input {
    border-radius: 10rpx;
    height: 70rpx;
    margin: 10rpx;
    background-color: #fff;
    opacity: 0.8;
    padding: 20rpx 20rpx;
    box-sizing: border-box;
  }
</style>
